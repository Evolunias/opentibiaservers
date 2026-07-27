import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-old-school-server-france');
}

export default function MediviaOldSchoolServerFranceKeywordPage() {
  return <StaticKeywordPage slug="medivia-old-school-server-france" />;
}
