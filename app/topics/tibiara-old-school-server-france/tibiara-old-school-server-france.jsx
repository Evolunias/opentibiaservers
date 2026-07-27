import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-old-school-server-france');
}

export default function TibiaraOldSchoolServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibiara-old-school-server-france" />;
}
