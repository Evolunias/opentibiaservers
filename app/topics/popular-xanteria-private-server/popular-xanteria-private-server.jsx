import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-xanteria-private-server');
}

export default function PopularXanteriaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="popular-xanteria-private-server" />;
}
