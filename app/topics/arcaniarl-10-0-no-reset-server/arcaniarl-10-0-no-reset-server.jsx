import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-10-0-no-reset-server');
}

export default function Arcaniarl100NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-10-0-no-reset-server" />;
}
