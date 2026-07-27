import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-15-no-reset-server');
}

export default function Originaltibia15NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-15-no-reset-server" />;
}
