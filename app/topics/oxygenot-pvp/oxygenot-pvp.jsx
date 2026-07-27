import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-pvp');
}

export default function OxygenotPvpKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-pvp" />;
}
