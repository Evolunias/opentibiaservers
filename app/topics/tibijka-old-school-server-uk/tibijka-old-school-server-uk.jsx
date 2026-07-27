import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-old-school-server-uk');
}

export default function TibijkaOldSchoolServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibijka-old-school-server-uk" />;
}
