import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-retro-server-sweden');
}

export default function TibiantisRetroServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-retro-server-sweden" />;
}
