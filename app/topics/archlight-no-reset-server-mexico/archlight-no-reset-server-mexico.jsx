import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-no-reset-server-mexico');
}

export default function ArchlightNoResetServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="archlight-no-reset-server-mexico" />;
}
