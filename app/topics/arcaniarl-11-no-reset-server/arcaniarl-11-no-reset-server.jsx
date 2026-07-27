import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-11-no-reset-server');
}

export default function Arcaniarl11NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-11-no-reset-server" />;
}
