import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-arcaniarl-server');
}

export default function ActiveArcaniarlServerKeywordPage() {
  return <StaticKeywordPage slug="active-arcaniarl-server" />;
}
