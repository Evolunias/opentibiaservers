import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-oxygenot');
}

export default function CurrentOxygenotKeywordPage() {
  return <StaticKeywordPage slug="current-oxygenot" />;
}
