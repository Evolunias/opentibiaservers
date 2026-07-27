import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-retro-server-usa');
}

export default function ArchlightRetroServerUsaKeywordPage() {
  return <StaticKeywordPage slug="archlight-retro-server-usa" />;
}
