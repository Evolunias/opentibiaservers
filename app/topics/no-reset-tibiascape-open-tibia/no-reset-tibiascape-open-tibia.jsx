import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiascape-open-tibia');
}

export default function NoResetTibiascapeOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiascape-open-tibia" />;
}
