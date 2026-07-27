import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-official');
}

export default function ClassicusOfficialKeywordPage() {
  return <StaticKeywordPage slug="classicus-official" />;
}
