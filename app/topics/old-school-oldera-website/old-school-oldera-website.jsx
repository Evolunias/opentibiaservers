import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-oldera-website');
}

export default function OldSchoolOlderaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="old-school-oldera-website" />;
}
