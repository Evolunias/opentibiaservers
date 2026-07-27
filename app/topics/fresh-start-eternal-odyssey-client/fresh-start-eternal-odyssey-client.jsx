import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-eternal-odyssey-client');
}

export default function FreshStartEternalOdysseyClientKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-eternal-odyssey-client" />;
}
