import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-zunera-ot-tibia');
}

export default function FreshStartZuneraOtTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-zunera-ot-tibia" />;
}
