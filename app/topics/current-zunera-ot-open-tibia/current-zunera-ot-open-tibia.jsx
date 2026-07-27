import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-zunera-ot-open-tibia');
}

export default function CurrentZuneraOtOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-zunera-ot-open-tibia" />;
}
