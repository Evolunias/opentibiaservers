import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-south-america-server');
}

export default function ArcaniarlSouthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-south-america-server" />;
}
