import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-retro-server-europe');
}

export default function HarmoniaOtRetroServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-retro-server-europe" />;
}
