import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-8-4-no-reset-server');
}

export default function Arcaniarl84NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-8-4-no-reset-server" />;
}
