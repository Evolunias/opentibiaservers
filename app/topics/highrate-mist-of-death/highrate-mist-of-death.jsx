import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-mist-of-death');
}

export default function HighrateMistOfDeathKeywordPage() {
  return <StaticKeywordPage slug="highrate-mist-of-death" />;
}
