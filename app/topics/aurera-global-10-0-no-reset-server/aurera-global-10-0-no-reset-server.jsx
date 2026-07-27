import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-10-0-no-reset-server');
}

export default function AureraGlobal100NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-10-0-no-reset-server" />;
}
