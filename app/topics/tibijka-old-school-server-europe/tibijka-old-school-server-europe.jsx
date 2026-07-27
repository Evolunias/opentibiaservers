import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-old-school-server-europe');
}

export default function TibijkaOldSchoolServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibijka-old-school-server-europe" />;
}
