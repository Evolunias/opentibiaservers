import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-12-no-reset-server');
}

export default function Empirebr12NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-12-no-reset-server" />;
}
