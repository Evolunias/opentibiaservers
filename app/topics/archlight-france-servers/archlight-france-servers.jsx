import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-france-servers');
}

export default function ArchlightFranceServersKeywordPage() {
  return <StaticKeywordPage slug="archlight-france-servers" />;
}
