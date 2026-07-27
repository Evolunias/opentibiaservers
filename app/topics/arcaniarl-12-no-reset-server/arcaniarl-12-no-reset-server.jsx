import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-12-no-reset-server');
}

export default function Arcaniarl12NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-12-no-reset-server" />;
}
