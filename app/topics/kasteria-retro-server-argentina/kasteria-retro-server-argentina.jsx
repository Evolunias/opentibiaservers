import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-retro-server-argentina');
}

export default function KasteriaRetroServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="kasteria-retro-server-argentina" />;
}
