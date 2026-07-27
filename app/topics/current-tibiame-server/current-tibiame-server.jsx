import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiame-server');
}

export default function CurrentTibiameServerKeywordPage() {
  return <StaticKeywordPage slug="current-tibiame-server" />;
}
