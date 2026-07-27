import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-south-america-servers');
}

export default function KasteriaSouthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="kasteria-south-america-servers" />;
}
