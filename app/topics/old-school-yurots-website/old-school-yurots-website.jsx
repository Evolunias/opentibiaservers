import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-yurots-website');
}

export default function OldSchoolYurotsWebsiteKeywordPage() {
  return <StaticKeywordPage slug="old-school-yurots-website" />;
}
