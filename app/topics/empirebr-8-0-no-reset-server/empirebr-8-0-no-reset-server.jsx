import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-8-0-no-reset-server');
}

export default function Empirebr80NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-8-0-no-reset-server" />;
}
