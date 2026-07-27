import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-zunera-ot-open-tibia');
}

export default function NewZuneraOtOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-zunera-ot-open-tibia" />;
}
