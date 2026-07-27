import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-retro-server-canada');
}

export default function NepreniaRetroServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="neprenia-retro-server-canada" />;
}
