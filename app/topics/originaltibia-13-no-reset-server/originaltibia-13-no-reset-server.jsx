import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-13-no-reset-server');
}

export default function Originaltibia13NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-13-no-reset-server" />;
}
