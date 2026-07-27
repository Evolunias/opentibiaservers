import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-france-server');
}

export default function ArchlightFranceServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-france-server" />;
}
