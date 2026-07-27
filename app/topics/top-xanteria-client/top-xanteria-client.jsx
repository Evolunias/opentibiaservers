import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-xanteria-client');
}

export default function TopXanteriaClientKeywordPage() {
  return <StaticKeywordPage slug="top-xanteria-client" />;
}
