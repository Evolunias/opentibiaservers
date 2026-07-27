import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-blazera-ot');
}

export default function HighrateBlazeraOtKeywordPage() {
  return <StaticKeywordPage slug="highrate-blazera-ot" />;
}
