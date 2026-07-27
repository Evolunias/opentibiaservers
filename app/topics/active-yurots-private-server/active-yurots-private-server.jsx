import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-yurots-private-server');
}

export default function ActiveYurotsPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="active-yurots-private-server" />;
}
