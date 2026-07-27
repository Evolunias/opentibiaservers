import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-retro-server-sweden');
}

export default function AlasteraRetroServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="alastera-retro-server-sweden" />;
}
