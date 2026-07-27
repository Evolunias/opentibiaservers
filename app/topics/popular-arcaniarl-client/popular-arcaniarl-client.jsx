import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-arcaniarl-client');
}

export default function PopularArcaniarlClientKeywordPage() {
  return <StaticKeywordPage slug="popular-arcaniarl-client" />;
}
