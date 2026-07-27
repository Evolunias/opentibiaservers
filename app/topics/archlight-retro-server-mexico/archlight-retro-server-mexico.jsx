import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-retro-server-mexico');
}

export default function ArchlightRetroServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="archlight-retro-server-mexico" />;
}
