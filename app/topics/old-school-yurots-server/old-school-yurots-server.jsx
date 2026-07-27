import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-yurots-server');
}

export default function OldSchoolYurotsServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-yurots-server" />;
}
