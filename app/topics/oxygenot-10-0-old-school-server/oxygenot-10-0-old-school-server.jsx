import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-10-0-old-school-server');
}

export default function Oxygenot100OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-10-0-old-school-server" />;
}
