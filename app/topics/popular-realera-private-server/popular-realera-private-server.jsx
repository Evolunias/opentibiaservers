import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-realera-private-server');
}

export default function PopularRealeraPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="popular-realera-private-server" />;
}
