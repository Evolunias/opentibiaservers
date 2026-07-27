import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-retro-server-uk');
}

export default function ArchlightRetroServerUkKeywordPage() {
  return <StaticKeywordPage slug="archlight-retro-server-uk" />;
}
