import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-imperianic');
}

export default function TopImperianicKeywordPage() {
  return <StaticKeywordPage slug="top-imperianic" />;
}
