import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-7-72-no-reset-server');
}

export default function Originaltibia772NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-7-72-no-reset-server" />;
}
