import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-9-6-no-reset-server');
}

export default function AureraGlobal96NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-9-6-no-reset-server" />;
}
