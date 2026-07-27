import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-7-1-no-reset-server');
}

export default function Archlight71NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-7-1-no-reset-server" />;
}
