import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-old-school-server-chile');
}

export default function EvoluniaOldSchoolServerChileKeywordPage() {
  return <StaticKeywordPage slug="evolunia-old-school-server-chile" />;
}
