import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-high-exp-server-uk');
}

export default function AlasteraHighExpServerUkKeywordPage() {
  return <StaticKeywordPage slug="alastera-high-exp-server-uk" />;
}
