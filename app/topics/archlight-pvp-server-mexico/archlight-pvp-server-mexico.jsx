import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-pvp-server-mexico');
}

export default function ArchlightPvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="archlight-pvp-server-mexico" />;
}
