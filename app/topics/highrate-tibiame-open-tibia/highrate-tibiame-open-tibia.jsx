import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibiame-open-tibia');
}

export default function HighrateTibiameOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibiame-open-tibia" />;
}
