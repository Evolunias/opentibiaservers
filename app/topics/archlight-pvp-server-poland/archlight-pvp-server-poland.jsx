import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-pvp-server-poland');
}

export default function ArchlightPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="archlight-pvp-server-poland" />;
}
