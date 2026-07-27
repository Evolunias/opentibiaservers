import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-unline-open-tibia');
}

export default function PopularUnlineOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-unline-open-tibia" />;
}
