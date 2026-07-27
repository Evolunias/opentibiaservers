import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-medivia-open-tibia');
}

export default function PopularMediviaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-medivia-open-tibia" />;
}
