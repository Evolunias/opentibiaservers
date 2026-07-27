import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-no-reset-server-europe');
}

export default function ArchlightNoResetServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="archlight-no-reset-server-europe" />;
}
