import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-15-no-reset-server');
}

export default function AureraGlobal15NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-15-no-reset-server" />;
}
