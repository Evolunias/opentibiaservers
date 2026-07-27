import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-bosses');
}

export default function ArchlightBossesKeywordPage() {
  return <StaticKeywordPage slug="archlight-bosses" />;
}
