import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibijka-open-tibia');
}

export default function FreshStartTibijkaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibijka-open-tibia" />;
}
