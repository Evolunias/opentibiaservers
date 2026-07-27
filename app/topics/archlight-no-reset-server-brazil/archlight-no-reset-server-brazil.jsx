import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-no-reset-server-brazil');
}

export default function ArchlightNoResetServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="archlight-no-reset-server-brazil" />;
}
