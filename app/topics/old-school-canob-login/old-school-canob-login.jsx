import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-canob-login');
}

export default function OldSchoolCanobLoginKeywordPage() {
  return <StaticKeywordPage slug="old-school-canob-login" />;
}
