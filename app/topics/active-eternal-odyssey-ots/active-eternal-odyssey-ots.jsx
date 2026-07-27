import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-eternal-odyssey-ots');
}

export default function ActiveEternalOdysseyOtsKeywordPage() {
  return <StaticKeywordPage slug="active-eternal-odyssey-ots" />;
}
