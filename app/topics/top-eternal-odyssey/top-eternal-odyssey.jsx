import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-eternal-odyssey');
}

export default function TopEternalOdysseyKeywordPage() {
  return <StaticKeywordPage slug="top-eternal-odyssey" />;
}
