import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-8-0-no-reset-server');
}

export default function Arcaniarl80NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-8-0-no-reset-server" />;
}
