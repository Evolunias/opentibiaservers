import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-11-no-reset-server');
}

export default function Originaltibia11NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-11-no-reset-server" />;
}
