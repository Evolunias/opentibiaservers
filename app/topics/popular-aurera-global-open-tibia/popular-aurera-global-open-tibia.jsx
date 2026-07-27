import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-aurera-global-open-tibia');
}

export default function PopularAureraGlobalOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-aurera-global-open-tibia" />;
}
