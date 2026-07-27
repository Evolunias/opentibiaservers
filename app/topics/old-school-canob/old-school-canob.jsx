import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-canob');
}

export default function OldSchoolCanobKeywordPage() {
  return <StaticKeywordPage slug="old-school-canob" />;
}
