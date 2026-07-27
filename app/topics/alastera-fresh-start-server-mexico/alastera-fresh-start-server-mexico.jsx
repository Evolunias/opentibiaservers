import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-fresh-start-server-mexico');
}

export default function AlasteraFreshStartServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="alastera-fresh-start-server-mexico" />;
}
