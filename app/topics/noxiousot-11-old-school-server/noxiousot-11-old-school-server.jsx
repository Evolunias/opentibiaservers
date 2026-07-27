import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-11-old-school-server');
}

export default function Noxiousot11OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-11-old-school-server" />;
}
