import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibianus-open-tibia');
}

export default function PopularTibianusOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-tibianus-open-tibia" />;
}
