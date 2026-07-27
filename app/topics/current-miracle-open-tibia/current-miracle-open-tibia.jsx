import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-miracle-open-tibia');
}

export default function CurrentMiracleOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-miracle-open-tibia" />;
}
