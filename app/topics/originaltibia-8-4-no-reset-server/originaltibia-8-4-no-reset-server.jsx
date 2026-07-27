import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-8-4-no-reset-server');
}

export default function Originaltibia84NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-8-4-no-reset-server" />;
}
