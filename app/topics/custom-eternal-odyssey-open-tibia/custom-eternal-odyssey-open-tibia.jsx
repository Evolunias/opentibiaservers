import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-eternal-odyssey-open-tibia');
}

export default function CustomEternalOdysseyOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-eternal-odyssey-open-tibia" />;
}
