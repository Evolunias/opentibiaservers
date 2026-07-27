import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-13-no-reset-server');
}

export default function Archlight13NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-13-no-reset-server" />;
}
