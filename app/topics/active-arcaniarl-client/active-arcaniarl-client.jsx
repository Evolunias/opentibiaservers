import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-arcaniarl-client');
}

export default function ActiveArcaniarlClientKeywordPage() {
  return <StaticKeywordPage slug="active-arcaniarl-client" />;
}
