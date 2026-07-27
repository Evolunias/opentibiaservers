import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-luminera-website');
}

export default function OldSchoolLumineraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="old-school-luminera-website" />;
}
