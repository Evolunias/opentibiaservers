import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-pvp-server-mexico');
}

export default function OxygenotPvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-pvp-server-mexico" />;
}
