import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-neprenia-open-tibia');
}

export default function PopularNepreniaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-neprenia-open-tibia" />;
}
