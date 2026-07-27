import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-9-6-old-school-server');
}

export default function Noxiousot96OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-9-6-old-school-server" />;
}
