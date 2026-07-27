import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-11-no-reset-server');
}

export default function AureraGlobal11NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-11-no-reset-server" />;
}
