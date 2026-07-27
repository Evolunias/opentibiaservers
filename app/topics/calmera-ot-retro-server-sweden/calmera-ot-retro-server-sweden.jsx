import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-retro-server-sweden');
}

export default function CalmeraOtRetroServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-retro-server-sweden" />;
}
