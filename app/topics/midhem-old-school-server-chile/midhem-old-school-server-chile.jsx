import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-old-school-server-chile');
}

export default function MidhemOldSchoolServerChileKeywordPage() {
  return <StaticKeywordPage slug="midhem-old-school-server-chile" />;
}
