import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-retro-server-poland');
}

export default function NepreniaRetroServerPolandKeywordPage() {
  return <StaticKeywordPage slug="neprenia-retro-server-poland" />;
}
