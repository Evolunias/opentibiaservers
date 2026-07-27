import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-retro-server-argentina');
}

export default function HarmoniaOtRetroServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-retro-server-argentina" />;
}
