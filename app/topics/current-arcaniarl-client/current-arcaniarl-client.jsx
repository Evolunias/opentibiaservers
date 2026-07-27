import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-arcaniarl-client');
}

export default function CurrentArcaniarlClientKeywordPage() {
  return <StaticKeywordPage slug="current-arcaniarl-client" />;
}
