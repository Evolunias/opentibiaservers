import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-zunera-ot-open-tibia');
}

export default function PopularZuneraOtOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-zunera-ot-open-tibia" />;
}
