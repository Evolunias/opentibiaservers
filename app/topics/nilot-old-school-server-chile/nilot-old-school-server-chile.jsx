import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-old-school-server-chile');
}

export default function NilotOldSchoolServerChileKeywordPage() {
  return <StaticKeywordPage slug="nilot-old-school-server-chile" />;
}
