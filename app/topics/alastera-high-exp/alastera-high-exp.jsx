import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-high-exp');
}

export default function AlasteraHighExpKeywordPage() {
  return <StaticKeywordPage slug="alastera-high-exp" />;
}
