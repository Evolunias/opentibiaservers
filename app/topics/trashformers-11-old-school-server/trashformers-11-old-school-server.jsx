import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-11-old-school-server');
}

export default function Trashformers11OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-11-old-school-server" />;
}
