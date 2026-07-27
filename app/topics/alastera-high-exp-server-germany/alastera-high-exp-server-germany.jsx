import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-high-exp-server-germany');
}

export default function AlasteraHighExpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="alastera-high-exp-server-germany" />;
}
