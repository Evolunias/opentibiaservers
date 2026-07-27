import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-yurots-ot-server');
}

export default function OldSchoolYurotsOtServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-yurots-ot-server" />;
}
