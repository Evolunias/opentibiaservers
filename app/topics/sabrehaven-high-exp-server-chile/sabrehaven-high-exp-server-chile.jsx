import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-high-exp-server-chile');
}

export default function SabrehavenHighExpServerChileKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-high-exp-server-chile" />;
}
