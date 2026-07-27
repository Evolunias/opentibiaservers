import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-aurera-global-tibia');
}

export default function NoResetAureraGlobalTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-aurera-global-tibia" />;
}
