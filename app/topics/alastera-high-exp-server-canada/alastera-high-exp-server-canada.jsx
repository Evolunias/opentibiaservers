import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-high-exp-server-canada');
}

export default function AlasteraHighExpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="alastera-high-exp-server-canada" />;
}
