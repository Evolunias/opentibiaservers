import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-midhem-website');
}

export default function OldSchoolMidhemWebsiteKeywordPage() {
  return <StaticKeywordPage slug="old-school-midhem-website" />;
}
