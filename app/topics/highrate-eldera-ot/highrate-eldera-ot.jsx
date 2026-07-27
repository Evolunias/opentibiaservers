import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-eldera-ot');
}

export default function HighrateElderaOtKeywordPage() {
  return <StaticKeywordPage slug="highrate-eldera-ot" />;
}
