import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-zunera-ot-tibia');
}

export default function CurrentZuneraOtTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-zunera-ot-tibia" />;
}
