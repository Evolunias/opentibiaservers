import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-south-america-server');
}

export default function KasteriaSouthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-south-america-server" />;
}
