import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-eternal-odyssey-ots');
}

export default function NewEternalOdysseyOtsKeywordPage() {
  return <StaticKeywordPage slug="new-eternal-odyssey-ots" />;
}
