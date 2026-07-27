import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-baiak-server-chile');
}

export default function SabrehavenBaiakServerChileKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-baiak-server-chile" />;
}
