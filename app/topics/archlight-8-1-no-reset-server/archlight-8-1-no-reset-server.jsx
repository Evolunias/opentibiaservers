import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-8-1-no-reset-server');
}

export default function Archlight81NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-8-1-no-reset-server" />;
}
