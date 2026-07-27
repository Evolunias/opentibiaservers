import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-evo-server-europe');
}

export default function ArchlightEvoServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="archlight-evo-server-europe" />;
}
