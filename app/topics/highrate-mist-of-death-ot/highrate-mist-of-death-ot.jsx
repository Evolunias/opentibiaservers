import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-mist-of-death-ot');
}

export default function HighrateMistOfDeathOtKeywordPage() {
  return <StaticKeywordPage slug="highrate-mist-of-death-ot" />;
}
