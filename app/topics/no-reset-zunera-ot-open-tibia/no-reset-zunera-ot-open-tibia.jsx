import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-zunera-ot-open-tibia');
}

export default function NoResetZuneraOtOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-zunera-ot-open-tibia" />;
}
