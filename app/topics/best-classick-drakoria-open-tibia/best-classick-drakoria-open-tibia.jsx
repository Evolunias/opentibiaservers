import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-classick-drakoria-open-tibia');
}

export default function BestClassickDrakoriaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-classick-drakoria-open-tibia" />;
}
