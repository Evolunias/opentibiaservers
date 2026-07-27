import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-originaltibia-tibia');
}

export default function HighrateOriginaltibiaTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-originaltibia-tibia" />;
}
