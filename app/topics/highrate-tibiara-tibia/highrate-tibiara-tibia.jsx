import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibiara-tibia');
}

export default function HighrateTibiaraTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibiara-tibia" />;
}
