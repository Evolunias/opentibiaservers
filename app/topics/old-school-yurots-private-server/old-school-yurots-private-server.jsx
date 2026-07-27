import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-yurots-private-server');
}

export default function OldSchoolYurotsPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-yurots-private-server" />;
}
