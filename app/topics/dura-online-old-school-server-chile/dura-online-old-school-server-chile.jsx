import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-old-school-server-chile');
}

export default function DuraOnlineOldSchoolServerChileKeywordPage() {
  return <StaticKeywordPage slug="dura-online-old-school-server-chile" />;
}
