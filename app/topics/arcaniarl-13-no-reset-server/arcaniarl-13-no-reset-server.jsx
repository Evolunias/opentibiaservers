import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-13-no-reset-server');
}

export default function Arcaniarl13NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-13-no-reset-server" />;
}
