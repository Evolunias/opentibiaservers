import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-old-school-server-europe');
}

export default function NoxiousotOldSchoolServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-old-school-server-europe" />;
}
