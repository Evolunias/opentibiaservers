import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-eldera-private-server');
}

export default function TopElderaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="top-eldera-private-server" />;
}
