import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-old-school-server-chile');
}

export default function TibiameOldSchoolServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibiame-old-school-server-chile" />;
}
