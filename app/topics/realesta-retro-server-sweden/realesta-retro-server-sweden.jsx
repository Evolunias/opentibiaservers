import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-retro-server-sweden');
}

export default function RealestaRetroServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="realesta-retro-server-sweden" />;
}
