import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-oxygenot-server');
}

export default function OldSchoolOxygenotServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-oxygenot-server" />;
}
