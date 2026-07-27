import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-eternal-odyssey-client');
}

export default function ActiveEternalOdysseyClientKeywordPage() {
  return <StaticKeywordPage slug="active-eternal-odyssey-client" />;
}
