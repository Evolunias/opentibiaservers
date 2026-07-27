import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-retro-server-sweden');
}

export default function NtoStarRetroServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="nto-star-retro-server-sweden" />;
}
