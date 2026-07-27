import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-retro-server-brazil');
}

export default function KasteriaRetroServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="kasteria-retro-server-brazil" />;
}
