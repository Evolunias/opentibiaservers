import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-7-1-no-reset-server');
}

export default function Arcaniarl71NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-7-1-no-reset-server" />;
}
