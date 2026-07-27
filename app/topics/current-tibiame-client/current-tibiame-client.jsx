import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiame-client');
}

export default function CurrentTibiameClientKeywordPage() {
  return <StaticKeywordPage slug="current-tibiame-client" />;
}
