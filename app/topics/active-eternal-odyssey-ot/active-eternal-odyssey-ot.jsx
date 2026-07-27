import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-eternal-odyssey-ot');
}

export default function ActiveEternalOdysseyOtKeywordPage() {
  return <StaticKeywordPage slug="active-eternal-odyssey-ot" />;
}
