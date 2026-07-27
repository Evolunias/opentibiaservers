import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-yurots-private-server');
}

export default function CustomYurotsPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="custom-yurots-private-server" />;
}
