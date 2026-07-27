import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-aurera-global-tibia');
}

export default function PopularAureraGlobalTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-aurera-global-tibia" />;
}
