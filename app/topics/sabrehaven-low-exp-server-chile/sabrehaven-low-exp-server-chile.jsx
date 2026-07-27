import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-low-exp-server-chile');
}

export default function SabrehavenLowExpServerChileKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-low-exp-server-chile" />;
}
