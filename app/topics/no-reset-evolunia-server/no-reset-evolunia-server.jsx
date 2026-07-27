import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-evolunia-server');
}

export default function NoResetEvoluniaServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-evolunia-server" />;
}
