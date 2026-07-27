import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-demolidores-website');
}

export default function OldSchoolDemolidoresWebsiteKeywordPage() {
  return <StaticKeywordPage slug="old-school-demolidores-website" />;
}
