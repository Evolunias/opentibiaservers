import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-originaltibia-open-tibia');
}

export default function HighrateOriginaltibiaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-originaltibia-open-tibia" />;
}
