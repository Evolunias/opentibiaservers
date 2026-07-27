import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-11-old-school-server');
}

export default function Oxygenot11OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-11-old-school-server" />;
}
