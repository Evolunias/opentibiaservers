import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-aurera-global-website');
}

export default function OldSchoolAureraGlobalWebsiteKeywordPage() {
  return <StaticKeywordPage slug="old-school-aurera-global-website" />;
}
