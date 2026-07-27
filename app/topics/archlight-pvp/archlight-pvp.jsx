import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-pvp');
}

export default function ArchlightPvpKeywordPage() {
  return <StaticKeywordPage slug="archlight-pvp" />;
}
