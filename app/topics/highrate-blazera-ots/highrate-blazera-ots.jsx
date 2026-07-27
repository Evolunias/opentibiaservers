import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-blazera-ots');
}

export default function HighrateBlazeraOtsKeywordPage() {
  return <StaticKeywordPage slug="highrate-blazera-ots" />;
}
