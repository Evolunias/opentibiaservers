import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-13-old-school-server');
}

export default function Trashformers13OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-13-old-school-server" />;
}
