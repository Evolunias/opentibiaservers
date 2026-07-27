import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-pvp-server-brazil');
}

export default function OxygenotPvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-pvp-server-brazil" />;
}
