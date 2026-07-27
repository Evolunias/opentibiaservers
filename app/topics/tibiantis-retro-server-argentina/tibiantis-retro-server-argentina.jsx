import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-retro-server-argentina');
}

export default function TibiantisRetroServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-retro-server-argentina" />;
}
