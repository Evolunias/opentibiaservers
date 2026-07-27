import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibianus-open-tibia');
}

export default function HighrateTibianusOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibianus-open-tibia" />;
}
