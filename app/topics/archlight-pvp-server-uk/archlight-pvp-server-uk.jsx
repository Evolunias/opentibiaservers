import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-pvp-server-uk');
}

export default function ArchlightPvpServerUkKeywordPage() {
  return <StaticKeywordPage slug="archlight-pvp-server-uk" />;
}
