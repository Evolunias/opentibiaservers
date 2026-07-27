import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('libera-server');
}

export default function LiberaServerKeywordPage() {
  return <StaticKeywordPage slug="libera-server" />;
}
