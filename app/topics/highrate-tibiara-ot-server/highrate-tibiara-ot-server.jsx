import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibiara-ot-server');
}

export default function HighrateTibiaraOtServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibiara-ot-server" />;
}
