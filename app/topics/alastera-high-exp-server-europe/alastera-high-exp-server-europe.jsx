import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-high-exp-server-europe');
}

export default function AlasteraHighExpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="alastera-high-exp-server-europe" />;
}
