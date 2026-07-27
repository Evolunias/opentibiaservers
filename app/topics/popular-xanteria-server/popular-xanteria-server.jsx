import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-xanteria-server');
}

export default function PopularXanteriaServerKeywordPage() {
  return <StaticKeywordPage slug="popular-xanteria-server" />;
}
