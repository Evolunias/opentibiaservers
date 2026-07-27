import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-pvp-server-europe');
}

export default function ArchlightPvpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="archlight-pvp-server-europe" />;
}
