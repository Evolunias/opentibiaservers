import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-retro-server-europe');
}

export default function NepreniaRetroServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="neprenia-retro-server-europe" />;
}
