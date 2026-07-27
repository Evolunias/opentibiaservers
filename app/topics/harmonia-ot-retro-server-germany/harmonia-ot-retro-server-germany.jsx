import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-retro-server-germany');
}

export default function HarmoniaOtRetroServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-retro-server-germany" />;
}
