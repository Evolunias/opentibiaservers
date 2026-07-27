import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-old-school-server-brazil');
}

export default function NoxiousotOldSchoolServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-old-school-server-brazil" />;
}
