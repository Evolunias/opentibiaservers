import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-eldera-private-server');
}

export default function FreshStartElderaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-eldera-private-server" />;
}
