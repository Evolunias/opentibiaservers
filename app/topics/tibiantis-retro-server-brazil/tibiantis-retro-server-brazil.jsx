import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-retro-server-brazil');
}

export default function TibiantisRetroServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-retro-server-brazil" />;
}
