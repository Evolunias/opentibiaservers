import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-miracle-website');
}

export default function OldSchoolMiracleWebsiteKeywordPage() {
  return <StaticKeywordPage slug="old-school-miracle-website" />;
}
