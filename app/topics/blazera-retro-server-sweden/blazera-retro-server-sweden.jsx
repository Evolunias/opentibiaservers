import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-retro-server-sweden');
}

export default function BlazeraRetroServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="blazera-retro-server-sweden" />;
}
