import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-classick-drakoria-open-tibia');
}

export default function NoResetClassickDrakoriaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-classick-drakoria-open-tibia" />;
}
