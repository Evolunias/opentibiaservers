import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-14-no-reset-server');
}

export default function Archlight14NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-14-no-reset-server" />;
}
