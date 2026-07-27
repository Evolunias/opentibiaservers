import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-retro-server-sweden');
}

export default function NepreniaRetroServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="neprenia-retro-server-sweden" />;
}
