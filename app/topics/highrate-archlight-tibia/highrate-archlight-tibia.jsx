import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-archlight-tibia');
}

export default function HighrateArchlightTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-archlight-tibia" />;
}
