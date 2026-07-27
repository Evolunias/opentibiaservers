import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-retro-server-germany');
}

export default function TibiantisRetroServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-retro-server-germany" />;
}
