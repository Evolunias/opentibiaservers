import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-old-school-server-mexico');
}

export default function NoxiousotOldSchoolServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-old-school-server-mexico" />;
}
