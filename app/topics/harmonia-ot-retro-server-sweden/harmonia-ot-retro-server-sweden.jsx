import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-retro-server-sweden');
}

export default function HarmoniaOtRetroServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-retro-server-sweden" />;
}
