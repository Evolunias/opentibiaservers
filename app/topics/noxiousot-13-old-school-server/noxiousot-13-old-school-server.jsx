import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-13-old-school-server');
}

export default function Noxiousot13OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-13-old-school-server" />;
}
