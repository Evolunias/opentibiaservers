import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-retro-server-uk');
}

export default function HarmoniaOtRetroServerUkKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-retro-server-uk" />;
}
