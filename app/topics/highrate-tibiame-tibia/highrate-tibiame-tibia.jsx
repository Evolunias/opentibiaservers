import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibiame-tibia');
}

export default function HighrateTibiameTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibiame-tibia" />;
}
