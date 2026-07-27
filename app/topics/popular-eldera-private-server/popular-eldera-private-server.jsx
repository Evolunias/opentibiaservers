import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-eldera-private-server');
}

export default function PopularElderaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="popular-eldera-private-server" />;
}
