import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-aurera-global-open-tibia');
}

export default function NoResetAureraGlobalOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-aurera-global-open-tibia" />;
}
