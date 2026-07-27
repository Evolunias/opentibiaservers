import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-old-school-server-france');
}

export default function NoxiousotOldSchoolServerFranceKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-old-school-server-france" />;
}
