import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-15-old-school-server');
}

export default function Noxiousot15OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-15-old-school-server" />;
}
