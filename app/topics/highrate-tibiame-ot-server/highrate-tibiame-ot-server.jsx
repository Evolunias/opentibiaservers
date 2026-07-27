import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibiame-ot-server');
}

export default function HighrateTibiameOtServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibiame-ot-server" />;
}
