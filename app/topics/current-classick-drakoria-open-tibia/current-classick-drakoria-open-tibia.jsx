import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-classick-drakoria-open-tibia');
}

export default function CurrentClassickDrakoriaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-classick-drakoria-open-tibia" />;
}
