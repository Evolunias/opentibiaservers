import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-old-school-server-france');
}

export default function NepreniaOldSchoolServerFranceKeywordPage() {
  return <StaticKeywordPage slug="neprenia-old-school-server-france" />;
}
