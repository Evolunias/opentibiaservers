import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibiame-client');
}

export default function LowrateTibiameClientKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibiame-client" />;
}
