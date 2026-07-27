import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-retro-server-argentina');
}

export default function NepreniaRetroServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="neprenia-retro-server-argentina" />;
}
