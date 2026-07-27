import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-old-school-server-chile');
}

export default function ImperianicOldSchoolServerChileKeywordPage() {
  return <StaticKeywordPage slug="imperianic-old-school-server-chile" />;
}
