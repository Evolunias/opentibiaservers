import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-xanteria-client');
}

export default function FreshStartXanteriaClientKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-xanteria-client" />;
}
