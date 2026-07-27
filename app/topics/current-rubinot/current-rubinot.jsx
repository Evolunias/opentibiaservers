import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-rubinot');
}

export default function CurrentRubinotKeywordPage() {
  return <StaticKeywordPage slug="current-rubinot" />;
}
