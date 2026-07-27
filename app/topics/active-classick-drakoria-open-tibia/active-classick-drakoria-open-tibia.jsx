import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-classick-drakoria-open-tibia');
}

export default function ActiveClassickDrakoriaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-classick-drakoria-open-tibia" />;
}
