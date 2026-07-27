import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-demolidores-official');
}

export default function OldSchoolDemolidoresOfficialKeywordPage() {
  return <StaticKeywordPage slug="old-school-demolidores-official" />;
}
