import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-nostalther-official');
}

export default function OldSchoolNostaltherOfficialKeywordPage() {
  return <StaticKeywordPage slug="old-school-nostalther-official" />;
}
