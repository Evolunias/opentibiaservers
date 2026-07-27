import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-7-72-old-school-server');
}

export default function Oxygenot772OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-7-72-old-school-server" />;
}
