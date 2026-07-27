import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-sweden-server');
}

export default function ArcaniarlSwedenServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-sweden-server" />;
}
