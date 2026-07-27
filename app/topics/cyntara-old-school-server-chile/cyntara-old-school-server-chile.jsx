import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-old-school-server-chile');
}

export default function CyntaraOldSchoolServerChileKeywordPage() {
  return <StaticKeywordPage slug="cyntara-old-school-server-chile" />;
}
