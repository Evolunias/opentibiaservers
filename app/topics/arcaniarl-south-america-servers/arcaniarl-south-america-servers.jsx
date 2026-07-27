import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-south-america-servers');
}

export default function ArcaniarlSouthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-south-america-servers" />;
}
