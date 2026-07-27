import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-8-4-no-reset-server');
}

export default function AureraGlobal84NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-8-4-no-reset-server" />;
}
