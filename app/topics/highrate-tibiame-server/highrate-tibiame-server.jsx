import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibiame-server');
}

export default function HighrateTibiameServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibiame-server" />;
}
