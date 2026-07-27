import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-old-school-server-chile');
}

export default function MistOfDeathOldSchoolServerChileKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-old-school-server-chile" />;
}
