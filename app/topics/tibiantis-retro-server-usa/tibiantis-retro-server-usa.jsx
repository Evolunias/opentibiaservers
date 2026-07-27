import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-retro-server-usa');
}

export default function TibiantisRetroServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-retro-server-usa" />;
}
