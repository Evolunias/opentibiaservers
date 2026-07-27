import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-fresh-start-server-chile');
}

export default function OtmadnessFreshStartServerChileKeywordPage() {
  return <StaticKeywordPage slug="otmadness-fresh-start-server-chile" />;
}
