import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-imperianic-open-tibia');
}

export default function PopularImperianicOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-imperianic-open-tibia" />;
}
