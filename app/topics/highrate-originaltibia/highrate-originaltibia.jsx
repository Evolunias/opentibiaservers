import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-originaltibia');
}

export default function HighrateOriginaltibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-originaltibia" />;
}
