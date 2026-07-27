import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-oxygenot-website');
}

export default function OldSchoolOxygenotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="old-school-oxygenot-website" />;
}
