import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-retro-server-sweden');
}

export default function AureraGlobalRetroServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-retro-server-sweden" />;
}
