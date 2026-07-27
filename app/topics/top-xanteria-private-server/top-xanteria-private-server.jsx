import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-xanteria-private-server');
}

export default function TopXanteriaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="top-xanteria-private-server" />;
}
