import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-arcaniarl-client');
}

export default function NoResetArcaniarlClientKeywordPage() {
  return <StaticKeywordPage slug="no-reset-arcaniarl-client" />;
}
