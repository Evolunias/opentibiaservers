import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-zunera-ot-tibia');
}

export default function BestZuneraOtTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-zunera-ot-tibia" />;
}
