import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-high-exp-server-chile');
}

export default function AlasteraHighExpServerChileKeywordPage() {
  return <StaticKeywordPage slug="alastera-high-exp-server-chile" />;
}
