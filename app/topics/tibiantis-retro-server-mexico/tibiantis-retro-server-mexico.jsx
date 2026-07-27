import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-retro-server-mexico');
}

export default function TibiantisRetroServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-retro-server-mexico" />;
}
