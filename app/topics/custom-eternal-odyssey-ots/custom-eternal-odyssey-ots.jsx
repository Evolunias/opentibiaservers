import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-eternal-odyssey-ots');
}

export default function CustomEternalOdysseyOtsKeywordPage() {
  return <StaticKeywordPage slug="custom-eternal-odyssey-ots" />;
}
