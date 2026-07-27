import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-thornia-private-server');
}

export default function PopularThorniaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="popular-thornia-private-server" />;
}
