import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-old-school-server-chile');
}

export default function TibijkaOldSchoolServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibijka-old-school-server-chile" />;
}
