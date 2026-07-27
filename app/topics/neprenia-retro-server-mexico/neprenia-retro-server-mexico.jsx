import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-retro-server-mexico');
}

export default function NepreniaRetroServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="neprenia-retro-server-mexico" />;
}
