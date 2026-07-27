import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('libera-world');
}

export default function LiberaWorldKeywordPage() {
  return <StaticKeywordPage slug="libera-world" />;
}
