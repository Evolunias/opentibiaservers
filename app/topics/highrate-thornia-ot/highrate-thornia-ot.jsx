import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-thornia-ot');
}

export default function HighrateThorniaOtKeywordPage() {
  return <StaticKeywordPage slug="highrate-thornia-ot" />;
}
