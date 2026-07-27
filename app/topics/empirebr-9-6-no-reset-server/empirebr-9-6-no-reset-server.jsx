import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-9-6-no-reset-server');
}

export default function Empirebr96NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-9-6-no-reset-server" />;
}
