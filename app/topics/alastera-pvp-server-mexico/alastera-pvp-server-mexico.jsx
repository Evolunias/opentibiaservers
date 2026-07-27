import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-pvp-server-mexico');
}

export default function AlasteraPvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="alastera-pvp-server-mexico" />;
}
