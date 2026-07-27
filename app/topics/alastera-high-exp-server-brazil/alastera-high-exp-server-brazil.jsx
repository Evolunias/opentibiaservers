import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-high-exp-server-brazil');
}

export default function AlasteraHighExpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="alastera-high-exp-server-brazil" />;
}
