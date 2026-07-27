import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-no-reset-server-sweden');
}

export default function ArchlightNoResetServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="archlight-no-reset-server-sweden" />;
}
