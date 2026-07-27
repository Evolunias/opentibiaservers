import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-8-6-old-school-server');
}

export default function Noxiousot86OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-8-6-old-school-server" />;
}
