import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-alastera-open-tibia');
}

export default function PopularAlasteraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-alastera-open-tibia" />;
}
