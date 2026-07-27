import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-old-school-server-europe');
}

export default function TibiameOldSchoolServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibiame-old-school-server-europe" />;
}
