import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-14-no-reset-server');
}

export default function Arcaniarl14NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-14-no-reset-server" />;
}
