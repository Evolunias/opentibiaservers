import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-xanteria-server');
}

export default function TopXanteriaServerKeywordPage() {
  return <StaticKeywordPage slug="top-xanteria-server" />;
}
