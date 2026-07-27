import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-xanteria-private-server');
}

export default function FreshStartXanteriaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-xanteria-private-server" />;
}
