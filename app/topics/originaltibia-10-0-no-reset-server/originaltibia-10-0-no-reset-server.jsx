import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-10-0-no-reset-server');
}

export default function Originaltibia100NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-10-0-no-reset-server" />;
}
