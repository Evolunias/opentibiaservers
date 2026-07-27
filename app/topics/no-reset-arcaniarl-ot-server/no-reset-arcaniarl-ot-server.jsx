import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-arcaniarl-ot-server');
}

export default function NoResetArcaniarlOtServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-arcaniarl-ot-server" />;
}
