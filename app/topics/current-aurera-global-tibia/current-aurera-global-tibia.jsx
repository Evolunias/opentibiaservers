import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-aurera-global-tibia');
}

export default function CurrentAureraGlobalTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-aurera-global-tibia" />;
}
