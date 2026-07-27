import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-eternal-odyssey-tibia');
}

export default function ActiveEternalOdysseyTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-eternal-odyssey-tibia" />;
}
