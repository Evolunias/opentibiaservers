import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-7-6-no-reset-server');
}

export default function Empirebr76NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-7-6-no-reset-server" />;
}
