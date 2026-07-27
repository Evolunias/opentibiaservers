import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-old-school-server-chile');
}

export default function SerenityOldSchoolServerChileKeywordPage() {
  return <StaticKeywordPage slug="serenity-old-school-server-chile" />;
}
