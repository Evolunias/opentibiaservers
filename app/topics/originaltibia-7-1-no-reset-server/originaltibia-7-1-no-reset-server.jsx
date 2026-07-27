import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-7-1-no-reset-server');
}

export default function Originaltibia71NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-7-1-no-reset-server" />;
}
