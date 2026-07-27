import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-unline-open-tibia');
}

export default function TopUnlineOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-unline-open-tibia" />;
}
