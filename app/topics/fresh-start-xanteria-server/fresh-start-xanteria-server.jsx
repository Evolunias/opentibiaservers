import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-xanteria-server');
}

export default function FreshStartXanteriaServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-xanteria-server" />;
}
