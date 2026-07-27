import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-eternal-odyssey-open-tibia');
}

export default function NewEternalOdysseyOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-eternal-odyssey-open-tibia" />;
}
