import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-retro-server-sweden');
}

export default function RealeraRetroServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="realera-retro-server-sweden" />;
}
