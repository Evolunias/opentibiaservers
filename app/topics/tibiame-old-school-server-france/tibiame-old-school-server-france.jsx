import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-old-school-server-france');
}

export default function TibiameOldSchoolServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibiame-old-school-server-france" />;
}
