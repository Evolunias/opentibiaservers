import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-9-6-no-reset-server');
}

export default function Arcaniarl96NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-9-6-no-reset-server" />;
}
