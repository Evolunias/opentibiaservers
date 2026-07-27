import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-open-tibia');
}

export default function ClassickDrakoriaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-open-tibia" />;
}
