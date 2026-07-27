import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-zunera-ot-open-tibia');
}

export default function TopZuneraOtOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-zunera-ot-open-tibia" />;
}
