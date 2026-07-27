import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-retro-server-canada');
}

export default function HarmoniaOtRetroServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-retro-server-canada" />;
}
