import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-7-6-no-reset-server');
}

export default function Arcaniarl76NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-7-6-no-reset-server" />;
}
