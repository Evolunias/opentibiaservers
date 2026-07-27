import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-high-exp-server-mexico');
}

export default function AlasteraHighExpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="alastera-high-exp-server-mexico" />;
}
