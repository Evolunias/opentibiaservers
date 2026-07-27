import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-10-98-old-school-server');
}

export default function Noxiousot1098OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-10-98-old-school-server" />;
}
