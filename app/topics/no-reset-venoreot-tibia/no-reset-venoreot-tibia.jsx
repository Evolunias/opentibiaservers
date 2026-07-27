import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-venoreot-tibia');
}

export default function NoResetVenoreotTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-venoreot-tibia" />;
}
