import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-old-school-server-france');
}

export default function KasteriaOldSchoolServerFranceKeywordPage() {
  return <StaticKeywordPage slug="kasteria-old-school-server-france" />;
}
