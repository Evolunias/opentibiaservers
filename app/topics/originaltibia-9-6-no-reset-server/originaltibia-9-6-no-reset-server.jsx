import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-9-6-no-reset-server');
}

export default function Originaltibia96NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-9-6-no-reset-server" />;
}
