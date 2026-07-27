import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-old-school-server-chile');
}

export default function TrashformersOldSchoolServerChileKeywordPage() {
  return <StaticKeywordPage slug="trashformers-old-school-server-chile" />;
}
