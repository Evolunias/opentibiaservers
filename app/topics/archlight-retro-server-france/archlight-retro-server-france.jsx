import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-retro-server-france');
}

export default function ArchlightRetroServerFranceKeywordPage() {
  return <StaticKeywordPage slug="archlight-retro-server-france" />;
}
