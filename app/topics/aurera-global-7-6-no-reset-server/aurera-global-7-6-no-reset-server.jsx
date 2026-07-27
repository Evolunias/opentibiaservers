import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-7-6-no-reset-server');
}

export default function AureraGlobal76NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-7-6-no-reset-server" />;
}
