import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-old-school-server-france');
}

export default function AlasteraOldSchoolServerFranceKeywordPage() {
  return <StaticKeywordPage slug="alastera-old-school-server-france" />;
}
