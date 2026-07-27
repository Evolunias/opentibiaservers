import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-north-america-server');
}

export default function KasteriaNorthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-north-america-server" />;
}
