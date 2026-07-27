import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-south-america-servers');
}

export default function NtoStarSouthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="nto-star-south-america-servers" />;
}
