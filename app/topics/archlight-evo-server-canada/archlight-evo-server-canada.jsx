import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-evo-server-canada');
}

export default function ArchlightEvoServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="archlight-evo-server-canada" />;
}
