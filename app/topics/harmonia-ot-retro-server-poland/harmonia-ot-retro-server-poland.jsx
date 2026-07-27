import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-retro-server-poland');
}

export default function HarmoniaOtRetroServerPolandKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-retro-server-poland" />;
}
