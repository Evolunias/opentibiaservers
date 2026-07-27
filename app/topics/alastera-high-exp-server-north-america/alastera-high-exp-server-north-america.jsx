import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-high-exp-server-north-america');
}

export default function AlasteraHighExpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="alastera-high-exp-server-north-america" />;
}
