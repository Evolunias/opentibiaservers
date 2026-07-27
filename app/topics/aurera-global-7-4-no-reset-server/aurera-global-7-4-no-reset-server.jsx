import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-7-4-no-reset-server');
}

export default function AureraGlobal74NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-7-4-no-reset-server" />;
}
