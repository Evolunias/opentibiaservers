import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-7-1-old-school-server');
}

export default function Noxiousot71OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-7-1-old-school-server" />;
}
