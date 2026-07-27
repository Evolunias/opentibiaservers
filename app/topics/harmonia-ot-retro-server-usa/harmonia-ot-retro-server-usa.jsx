import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-retro-server-usa');
}

export default function HarmoniaOtRetroServerUsaKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-retro-server-usa" />;
}
