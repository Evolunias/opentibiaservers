import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-old-school-server-poland');
}

export default function NoxiousotOldSchoolServerPolandKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-old-school-server-poland" />;
}
