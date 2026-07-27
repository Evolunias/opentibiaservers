import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-no-reset-server-chile');
}

export default function AlasteraNoResetServerChileKeywordPage() {
  return <StaticKeywordPage slug="alastera-no-reset-server-chile" />;
}
