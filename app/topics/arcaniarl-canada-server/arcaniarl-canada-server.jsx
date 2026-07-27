import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-canada-server');
}

export default function ArcaniarlCanadaServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-canada-server" />;
}
