import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-rubinot-open-tibia');
}

export default function CurrentRubinotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-rubinot-open-tibia" />;
}
