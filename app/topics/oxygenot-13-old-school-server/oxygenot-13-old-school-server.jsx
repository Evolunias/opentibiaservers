import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-13-old-school-server');
}

export default function Oxygenot13OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-13-old-school-server" />;
}
