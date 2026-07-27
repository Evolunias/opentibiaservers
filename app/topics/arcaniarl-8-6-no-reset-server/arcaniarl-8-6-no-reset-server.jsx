import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-8-6-no-reset-server');
}

export default function Arcaniarl86NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-8-6-no-reset-server" />;
}
