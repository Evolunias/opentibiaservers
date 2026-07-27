import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-rubinot-website');
}

export default function OldSchoolRubinotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="old-school-rubinot-website" />;
}
