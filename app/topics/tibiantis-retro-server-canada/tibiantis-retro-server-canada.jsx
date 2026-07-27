import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-retro-server-canada');
}

export default function TibiantisRetroServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-retro-server-canada" />;
}
