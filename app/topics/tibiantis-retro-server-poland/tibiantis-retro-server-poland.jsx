import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-retro-server-poland');
}

export default function TibiantisRetroServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-retro-server-poland" />;
}
