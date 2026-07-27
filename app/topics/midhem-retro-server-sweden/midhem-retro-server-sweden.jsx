import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-retro-server-sweden');
}

export default function MidhemRetroServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="midhem-retro-server-sweden" />;
}
