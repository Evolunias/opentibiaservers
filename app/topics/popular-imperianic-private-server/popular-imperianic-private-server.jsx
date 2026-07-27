import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-imperianic-private-server');
}

export default function PopularImperianicPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="popular-imperianic-private-server" />;
}
