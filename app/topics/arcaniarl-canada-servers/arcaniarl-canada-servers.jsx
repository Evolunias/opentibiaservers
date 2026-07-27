import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-canada-servers');
}

export default function ArcaniarlCanadaServersKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-canada-servers" />;
}
