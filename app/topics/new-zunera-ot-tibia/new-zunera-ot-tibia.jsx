import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-zunera-ot-tibia');
}

export default function NewZuneraOtTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-zunera-ot-tibia" />;
}
