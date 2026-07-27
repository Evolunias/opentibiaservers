import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-retro-server-south-america');
}

export default function HarmoniaOtRetroServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-retro-server-south-america" />;
}
