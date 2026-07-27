import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('libera-wars');
}

export default function LiberaWarsKeywordPage() {
  return <StaticKeywordPage slug="libera-wars" />;
}
