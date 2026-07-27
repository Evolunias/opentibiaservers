import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-eternal-odyssey-tibia');
}

export default function CustomEternalOdysseyTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-eternal-odyssey-tibia" />;
}
