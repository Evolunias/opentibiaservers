import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-no-reset-server-usa');
}

export default function ArchlightNoResetServerUsaKeywordPage() {
  return <StaticKeywordPage slug="archlight-no-reset-server-usa" />;
}
