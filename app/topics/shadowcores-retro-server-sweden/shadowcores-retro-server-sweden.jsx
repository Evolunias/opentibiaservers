import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-retro-server-sweden');
}

export default function ShadowcoresRetroServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-retro-server-sweden" />;
}
