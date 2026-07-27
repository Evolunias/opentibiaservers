import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-oxygenot-ot-server');
}

export default function OldSchoolOxygenotOtServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-oxygenot-ot-server" />;
}
