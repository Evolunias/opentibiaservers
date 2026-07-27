import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-retro-server-germany');
}

export default function NepreniaRetroServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="neprenia-retro-server-germany" />;
}
