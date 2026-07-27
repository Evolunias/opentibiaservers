import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-retro-server-brazil');
}

export default function HarmoniaOtRetroServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-retro-server-brazil" />;
}
