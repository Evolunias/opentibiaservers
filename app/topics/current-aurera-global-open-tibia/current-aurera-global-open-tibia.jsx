import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-aurera-global-open-tibia');
}

export default function CurrentAureraGlobalOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-aurera-global-open-tibia" />;
}
