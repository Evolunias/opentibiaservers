import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-8-6-retro-server');
}

export default function HarmoniaOt86RetroServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-8-6-retro-server" />;
}
