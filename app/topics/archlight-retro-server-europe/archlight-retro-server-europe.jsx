import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-retro-server-europe');
}

export default function ArchlightRetroServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="archlight-retro-server-europe" />;
}
