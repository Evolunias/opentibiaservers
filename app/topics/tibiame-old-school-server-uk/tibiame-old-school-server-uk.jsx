import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-old-school-server-uk');
}

export default function TibiameOldSchoolServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibiame-old-school-server-uk" />;
}
