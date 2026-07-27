import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-14-old-school-server');
}

export default function Trashformers14OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-14-old-school-server" />;
}
