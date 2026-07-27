import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-rubinot-tibia');
}

export default function CurrentRubinotTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-rubinot-tibia" />;
}
