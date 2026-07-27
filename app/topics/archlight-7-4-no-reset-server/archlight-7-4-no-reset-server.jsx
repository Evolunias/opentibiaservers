import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-7-4-no-reset-server');
}

export default function Archlight74NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-7-4-no-reset-server" />;
}
