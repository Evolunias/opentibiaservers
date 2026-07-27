import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-retro-server-uk');
}

export default function NepreniaRetroServerUkKeywordPage() {
  return <StaticKeywordPage slug="neprenia-retro-server-uk" />;
}
