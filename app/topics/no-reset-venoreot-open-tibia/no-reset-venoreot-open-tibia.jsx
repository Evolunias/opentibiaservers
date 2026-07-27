import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-venoreot-open-tibia');
}

export default function NoResetVenoreotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-venoreot-open-tibia" />;
}
