import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-north-america-servers');
}

export default function KasteriaNorthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="kasteria-north-america-servers" />;
}
