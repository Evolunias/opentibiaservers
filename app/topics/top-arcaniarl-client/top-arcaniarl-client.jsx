import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-arcaniarl-client');
}

export default function TopArcaniarlClientKeywordPage() {
  return <StaticKeywordPage slug="top-arcaniarl-client" />;
}
