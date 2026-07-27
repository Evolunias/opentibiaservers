import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-old-school-server-usa');
}

export default function NoxiousotOldSchoolServerUsaKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-old-school-server-usa" />;
}
