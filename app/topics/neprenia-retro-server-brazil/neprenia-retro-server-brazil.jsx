import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-retro-server-brazil');
}

export default function NepreniaRetroServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="neprenia-retro-server-brazil" />;
}
