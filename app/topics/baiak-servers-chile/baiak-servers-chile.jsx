import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-servers-chile');
}

export default function BaiakServersChileKeywordPage() {
  return <StaticKeywordPage slug="baiak-servers-chile" />;
}
