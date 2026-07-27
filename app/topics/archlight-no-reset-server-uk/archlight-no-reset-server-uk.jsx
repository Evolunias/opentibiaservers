import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-no-reset-server-uk');
}

export default function ArchlightNoResetServerUkKeywordPage() {
  return <StaticKeywordPage slug="archlight-no-reset-server-uk" />;
}
