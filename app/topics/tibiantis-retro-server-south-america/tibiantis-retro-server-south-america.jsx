import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-retro-server-south-america');
}

export default function TibiantisRetroServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-retro-server-south-america" />;
}
