import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-retro-server-latin-america');
}

export default function ArchlightRetroServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="archlight-retro-server-latin-america" />;
}
