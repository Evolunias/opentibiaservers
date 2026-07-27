import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-14-no-reset-server');
}

export default function AureraGlobal14NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-14-no-reset-server" />;
}
