import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-14-no-reset-server');
}

export default function Originaltibia14NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-14-no-reset-server" />;
}
