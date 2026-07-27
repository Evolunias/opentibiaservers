import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-classick-drakoria-open-tibia');
}

export default function TopClassickDrakoriaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-classick-drakoria-open-tibia" />;
}
