import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-no-reset-server-argentina');
}

export default function EvoluniaNoResetServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="evolunia-no-reset-server-argentina" />;
}
