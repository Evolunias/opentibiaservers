import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-8-4-no-reset-server');
}

export default function Empirebr84NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-8-4-no-reset-server" />;
}
