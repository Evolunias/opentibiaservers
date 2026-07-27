import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-8-1-no-reset-server');
}

export default function Originaltibia81NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-8-1-no-reset-server" />;
}
