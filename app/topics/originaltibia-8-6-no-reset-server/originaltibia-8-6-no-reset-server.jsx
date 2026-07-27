import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-8-6-no-reset-server');
}

export default function Originaltibia86NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-8-6-no-reset-server" />;
}
