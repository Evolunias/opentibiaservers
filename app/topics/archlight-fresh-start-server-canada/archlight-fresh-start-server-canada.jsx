import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-fresh-start-server-canada');
}

export default function ArchlightFreshStartServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="archlight-fresh-start-server-canada" />;
}
