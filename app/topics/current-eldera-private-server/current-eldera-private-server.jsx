import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-eldera-private-server');
}

export default function CurrentElderaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="current-eldera-private-server" />;
}
