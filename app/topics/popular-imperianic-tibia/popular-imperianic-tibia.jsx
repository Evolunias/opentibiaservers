import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-imperianic-tibia');
}

export default function PopularImperianicTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-imperianic-tibia" />;
}
