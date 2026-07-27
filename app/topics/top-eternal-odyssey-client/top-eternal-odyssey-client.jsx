import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-eternal-odyssey-client');
}

export default function TopEternalOdysseyClientKeywordPage() {
  return <StaticKeywordPage slug="top-eternal-odyssey-client" />;
}
