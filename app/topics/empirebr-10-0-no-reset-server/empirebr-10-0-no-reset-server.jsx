import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-10-0-no-reset-server');
}

export default function Empirebr100NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-10-0-no-reset-server" />;
}
