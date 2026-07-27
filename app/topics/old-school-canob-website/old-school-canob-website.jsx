import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-canob-website');
}

export default function OldSchoolCanobWebsiteKeywordPage() {
  return <StaticKeywordPage slug="old-school-canob-website" />;
}
