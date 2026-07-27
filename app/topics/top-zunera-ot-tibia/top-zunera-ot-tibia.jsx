import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-zunera-ot-tibia');
}

export default function TopZuneraOtTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-zunera-ot-tibia" />;
}
