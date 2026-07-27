import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibijka-open-tibia');
}

export default function TopTibijkaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-tibijka-open-tibia" />;
}
