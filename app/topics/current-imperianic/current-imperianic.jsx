import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-imperianic');
}

export default function CurrentImperianicKeywordPage() {
  return <StaticKeywordPage slug="current-imperianic" />;
}
