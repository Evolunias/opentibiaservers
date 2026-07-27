import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-latin-america-server');
}

export default function KasteriaLatinAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-latin-america-server" />;
}
