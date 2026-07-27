import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-eternal-odyssey-tibia');
}

export default function NewEternalOdysseyTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-eternal-odyssey-tibia" />;
}
