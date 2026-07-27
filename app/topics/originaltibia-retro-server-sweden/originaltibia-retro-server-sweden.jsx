import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-retro-server-sweden');
}

export default function OriginaltibiaRetroServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-retro-server-sweden" />;
}
