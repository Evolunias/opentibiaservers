import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-non-pvp-server-brazil');
}

export default function OxygenotNonPvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-non-pvp-server-brazil" />;
}
