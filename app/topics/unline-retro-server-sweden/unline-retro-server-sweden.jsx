import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-retro-server-sweden');
}

export default function UnlineRetroServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="unline-retro-server-sweden" />;
}
