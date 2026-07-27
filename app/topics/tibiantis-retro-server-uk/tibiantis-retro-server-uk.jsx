import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-retro-server-uk');
}

export default function TibiantisRetroServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-retro-server-uk" />;
}
