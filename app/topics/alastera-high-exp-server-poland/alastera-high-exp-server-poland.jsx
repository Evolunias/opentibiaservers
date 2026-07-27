import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-high-exp-server-poland');
}

export default function AlasteraHighExpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="alastera-high-exp-server-poland" />;
}
