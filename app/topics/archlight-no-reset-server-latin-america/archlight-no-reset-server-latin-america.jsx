import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-no-reset-server-latin-america');
}

export default function ArchlightNoResetServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="archlight-no-reset-server-latin-america" />;
}
