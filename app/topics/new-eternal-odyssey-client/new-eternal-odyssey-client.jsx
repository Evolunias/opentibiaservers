import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-eternal-odyssey-client');
}

export default function NewEternalOdysseyClientKeywordPage() {
  return <StaticKeywordPage slug="new-eternal-odyssey-client" />;
}
