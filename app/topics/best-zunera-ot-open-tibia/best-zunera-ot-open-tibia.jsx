import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-zunera-ot-open-tibia');
}

export default function BestZuneraOtOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-zunera-ot-open-tibia" />;
}
