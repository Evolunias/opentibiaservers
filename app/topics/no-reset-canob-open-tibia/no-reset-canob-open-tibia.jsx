import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-canob-open-tibia');
}

export default function NoResetCanobOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-canob-open-tibia" />;
}
