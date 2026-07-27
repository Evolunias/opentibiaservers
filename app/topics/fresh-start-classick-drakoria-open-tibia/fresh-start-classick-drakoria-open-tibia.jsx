import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-classick-drakoria-open-tibia');
}

export default function FreshStartClassickDrakoriaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-classick-drakoria-open-tibia" />;
}
