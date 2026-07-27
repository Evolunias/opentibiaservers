import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-zunera-ot-open-tibia');
}

export default function FreshStartZuneraOtOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-zunera-ot-open-tibia" />;
}
