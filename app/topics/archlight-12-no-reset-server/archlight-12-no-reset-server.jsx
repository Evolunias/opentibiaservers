import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-12-no-reset-server');
}

export default function Archlight12NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-12-no-reset-server" />;
}
