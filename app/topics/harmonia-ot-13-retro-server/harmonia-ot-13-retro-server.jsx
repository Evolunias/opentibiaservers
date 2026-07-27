import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-13-retro-server');
}

export default function HarmoniaOt13RetroServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-13-retro-server" />;
}
