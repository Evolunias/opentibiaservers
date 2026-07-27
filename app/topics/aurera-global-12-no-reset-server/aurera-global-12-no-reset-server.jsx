import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-12-no-reset-server');
}

export default function AureraGlobal12NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-12-no-reset-server" />;
}
