import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-eldera-website');
}

export default function OldSchoolElderaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="old-school-eldera-website" />;
}
