import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-old-school-server-canada');
}

export default function NoxiousotOldSchoolServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-old-school-server-canada" />;
}
