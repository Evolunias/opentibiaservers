import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-retro-server-sweden');
}

export default function TibianusRetroServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibianus-retro-server-sweden" />;
}
