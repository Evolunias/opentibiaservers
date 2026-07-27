import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-12-old-school-server');
}

export default function Oxygenot12OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-12-old-school-server" />;
}
