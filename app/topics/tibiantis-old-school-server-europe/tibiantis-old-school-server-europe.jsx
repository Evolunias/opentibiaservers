import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-old-school-server-europe');
}

export default function TibiantisOldSchoolServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-old-school-server-europe" />;
}
