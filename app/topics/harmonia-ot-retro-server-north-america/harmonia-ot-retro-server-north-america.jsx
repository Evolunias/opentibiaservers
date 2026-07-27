import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-retro-server-north-america');
}

export default function HarmoniaOtRetroServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-retro-server-north-america" />;
}
