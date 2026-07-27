import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-evolunia-private-server');
}

export default function NoResetEvoluniaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-evolunia-private-server" />;
}
