import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-evolunia-client');
}

export default function NoResetEvoluniaClientKeywordPage() {
  return <StaticKeywordPage slug="no-reset-evolunia-client" />;
}
