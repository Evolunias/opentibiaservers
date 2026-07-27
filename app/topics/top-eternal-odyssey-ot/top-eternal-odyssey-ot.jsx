import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-eternal-odyssey-ot');
}

export default function TopEternalOdysseyOtKeywordPage() {
  return <StaticKeywordPage slug="top-eternal-odyssey-ot" />;
}
