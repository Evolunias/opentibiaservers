import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-canob-tibia');
}

export default function NoResetCanobTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-canob-tibia" />;
}
