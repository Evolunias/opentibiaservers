import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-retro-server-north-america');
}

export default function TibiantisRetroServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-retro-server-north-america" />;
}
