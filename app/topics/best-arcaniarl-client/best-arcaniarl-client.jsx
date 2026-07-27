import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-arcaniarl-client');
}

export default function BestArcaniarlClientKeywordPage() {
  return <StaticKeywordPage slug="best-arcaniarl-client" />;
}
