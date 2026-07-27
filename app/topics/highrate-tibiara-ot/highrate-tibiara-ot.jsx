import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibiara-ot');
}

export default function HighrateTibiaraOtKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibiara-ot" />;
}
