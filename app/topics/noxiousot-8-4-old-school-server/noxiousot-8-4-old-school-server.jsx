import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-8-4-old-school-server');
}

export default function Noxiousot84OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-8-4-old-school-server" />;
}
