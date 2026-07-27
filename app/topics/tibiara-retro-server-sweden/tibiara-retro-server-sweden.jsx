import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-retro-server-sweden');
}

export default function TibiaraRetroServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibiara-retro-server-sweden" />;
}
