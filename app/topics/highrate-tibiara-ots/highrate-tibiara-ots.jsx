import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibiara-ots');
}

export default function HighrateTibiaraOtsKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibiara-ots" />;
}
