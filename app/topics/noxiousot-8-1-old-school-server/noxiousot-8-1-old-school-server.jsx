import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-8-1-old-school-server');
}

export default function Noxiousot81OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-8-1-old-school-server" />;
}
