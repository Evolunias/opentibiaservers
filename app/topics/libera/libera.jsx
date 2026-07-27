import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('libera');
}

export default function LiberaKeywordPage() {
  return <StaticKeywordPage slug="libera" />;
}
