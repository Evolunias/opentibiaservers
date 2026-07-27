import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-eternal-odyssey-ot');
}

export default function NewEternalOdysseyOtKeywordPage() {
  return <StaticKeywordPage slug="new-eternal-odyssey-ot" />;
}
