import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-archlight-open-tibia');
}

export default function HighrateArchlightOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-archlight-open-tibia" />;
}
