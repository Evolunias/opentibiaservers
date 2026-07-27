import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-retro-server-canada');
}

export default function ArchlightRetroServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="archlight-retro-server-canada" />;
}
