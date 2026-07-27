import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-baiak-server-chile');
}

export default function MistOfDeathBaiakServerChileKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-baiak-server-chile" />;
}
