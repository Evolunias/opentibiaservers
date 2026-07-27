import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-7-4-no-reset-server');
}

export default function Originaltibia74NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-7-4-no-reset-server" />;
}
