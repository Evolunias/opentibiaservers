import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-sweden-servers');
}

export default function ArcaniarlSwedenServersKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-sweden-servers" />;
}
