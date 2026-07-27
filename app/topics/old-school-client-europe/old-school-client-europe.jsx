import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-client-europe');
}

export default function OldSchoolClientEuropeKeywordPage() {
  return <StaticKeywordPage slug="old-school-client-europe" />;
}
