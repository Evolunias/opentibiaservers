import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-zunera-ot-tibia');
}

export default function NoResetZuneraOtTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-zunera-ot-tibia" />;
}
