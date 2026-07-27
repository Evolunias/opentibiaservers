import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-low-exp-server-chile');
}

export default function AlasteraLowExpServerChileKeywordPage() {
  return <StaticKeywordPage slug="alastera-low-exp-server-chile" />;
}
