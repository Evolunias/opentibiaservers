import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-15-no-reset-server');
}

export default function Arcaniarl15NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-15-no-reset-server" />;
}
