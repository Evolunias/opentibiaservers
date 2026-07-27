import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-15-no-reset-server');
}

export default function Archlight15NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-15-no-reset-server" />;
}
