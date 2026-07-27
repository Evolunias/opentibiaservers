import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-8-4-old-school-server');
}

export default function Oxygenot84OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-8-4-old-school-server" />;
}
