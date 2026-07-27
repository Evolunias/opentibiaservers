import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-no-reset-server-france');
}

export default function ArchlightNoResetServerFranceKeywordPage() {
  return <StaticKeywordPage slug="archlight-no-reset-server-france" />;
}
