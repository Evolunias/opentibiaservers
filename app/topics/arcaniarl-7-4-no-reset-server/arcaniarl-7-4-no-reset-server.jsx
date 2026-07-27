import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-7-4-no-reset-server');
}

export default function Arcaniarl74NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-7-4-no-reset-server" />;
}
