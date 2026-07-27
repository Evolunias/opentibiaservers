import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-old-school-server-north-america');
}

export default function NoxiousotOldSchoolServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-old-school-server-north-america" />;
}
