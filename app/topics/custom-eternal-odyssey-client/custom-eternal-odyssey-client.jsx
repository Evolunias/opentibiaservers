import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-eternal-odyssey-client');
}

export default function CustomEternalOdysseyClientKeywordPage() {
  return <StaticKeywordPage slug="custom-eternal-odyssey-client" />;
}
