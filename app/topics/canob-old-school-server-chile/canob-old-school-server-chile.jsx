import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-old-school-server-chile');
}

export default function CanobOldSchoolServerChileKeywordPage() {
  return <StaticKeywordPage slug="canob-old-school-server-chile" />;
}
