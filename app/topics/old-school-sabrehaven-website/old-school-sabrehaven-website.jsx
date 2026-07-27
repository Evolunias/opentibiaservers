import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-sabrehaven-website');
}

export default function OldSchoolSabrehavenWebsiteKeywordPage() {
  return <StaticKeywordPage slug="old-school-sabrehaven-website" />;
}
