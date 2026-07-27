import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-xanteria-client');
}

export default function PopularXanteriaClientKeywordPage() {
  return <StaticKeywordPage slug="popular-xanteria-client" />;
}
