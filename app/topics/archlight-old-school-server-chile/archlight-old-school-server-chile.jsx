import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-old-school-server-chile');
}

export default function ArchlightOldSchoolServerChileKeywordPage() {
  return <StaticKeywordPage slug="archlight-old-school-server-chile" />;
}
