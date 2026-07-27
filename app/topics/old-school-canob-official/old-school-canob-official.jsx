import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-canob-official');
}

export default function OldSchoolCanobOfficialKeywordPage() {
  return <StaticKeywordPage slug="old-school-canob-official" />;
}
