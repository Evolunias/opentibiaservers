import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-oldera-ot');
}

export default function HighrateOlderaOtKeywordPage() {
  return <StaticKeywordPage slug="highrate-oldera-ot" />;
}
