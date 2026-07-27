import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-no-reset-server-germany');
}

export default function ArchlightNoResetServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="archlight-no-reset-server-germany" />;
}
