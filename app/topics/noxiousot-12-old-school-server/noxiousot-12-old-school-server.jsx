import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-12-old-school-server');
}

export default function Noxiousot12OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-12-old-school-server" />;
}
