import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibiascape-open-tibia');
}

export default function TopTibiascapeOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-tibiascape-open-tibia" />;
}
