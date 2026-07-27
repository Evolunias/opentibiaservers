import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-old-school-server-germany');
}

export default function NoxiousotOldSchoolServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-old-school-server-germany" />;
}
