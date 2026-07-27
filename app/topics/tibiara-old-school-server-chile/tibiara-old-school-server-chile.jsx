import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-old-school-server-chile');
}

export default function TibiaraOldSchoolServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibiara-old-school-server-chile" />;
}
