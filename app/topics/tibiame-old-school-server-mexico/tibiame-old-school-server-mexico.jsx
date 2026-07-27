import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-old-school-server-mexico');
}

export default function TibiameOldSchoolServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibiame-old-school-server-mexico" />;
}
