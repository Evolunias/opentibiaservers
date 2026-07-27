import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-midhem-official');
}

export default function OldSchoolMidhemOfficialKeywordPage() {
  return <StaticKeywordPage slug="old-school-midhem-official" />;
}
