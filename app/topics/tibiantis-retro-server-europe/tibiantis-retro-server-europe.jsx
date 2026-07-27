import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-retro-server-europe');
}

export default function TibiantisRetroServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-retro-server-europe" />;
}
