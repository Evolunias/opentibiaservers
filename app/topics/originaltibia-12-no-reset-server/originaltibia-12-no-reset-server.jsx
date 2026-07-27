import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-12-no-reset-server');
}

export default function Originaltibia12NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-12-no-reset-server" />;
}
