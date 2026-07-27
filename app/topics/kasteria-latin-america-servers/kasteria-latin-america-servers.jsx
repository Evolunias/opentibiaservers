import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-latin-america-servers');
}

export default function KasteriaLatinAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="kasteria-latin-america-servers" />;
}
