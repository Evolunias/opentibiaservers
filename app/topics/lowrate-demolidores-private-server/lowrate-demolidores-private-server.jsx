import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-demolidores-private-server');
}

export default function LowrateDemolidoresPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-demolidores-private-server" />;
}
