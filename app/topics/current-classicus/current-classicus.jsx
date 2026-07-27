import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-classicus');
}

export default function CurrentClassicusKeywordPage() {
  return <StaticKeywordPage slug="current-classicus" />;
}
