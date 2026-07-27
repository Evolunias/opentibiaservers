import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiascape-tibia');
}

export default function NoResetTibiascapeTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiascape-tibia" />;
}
