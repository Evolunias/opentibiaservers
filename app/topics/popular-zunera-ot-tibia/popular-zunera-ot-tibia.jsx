import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-zunera-ot-tibia');
}

export default function PopularZuneraOtTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-zunera-ot-tibia" />;
}
