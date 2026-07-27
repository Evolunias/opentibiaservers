import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-7-72-no-reset-server');
}

export default function Archlight772NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-7-72-no-reset-server" />;
}
