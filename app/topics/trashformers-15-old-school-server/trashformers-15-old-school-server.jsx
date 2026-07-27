import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-15-old-school-server');
}

export default function Trashformers15OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-15-old-school-server" />;
}
