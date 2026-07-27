import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-retro-server-sweden');
}

export default function ThaisotRetroServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="thaisot-retro-server-sweden" />;
}
