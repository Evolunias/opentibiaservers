import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibiame-client');
}

export default function HighrateTibiameClientKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibiame-client" />;
}
