import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-evo-server-uk');
}

export default function ArchlightEvoServerUkKeywordPage() {
  return <StaticKeywordPage slug="archlight-evo-server-uk" />;
}
