import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-7-1-retro-server');
}

export default function HarmoniaOt71RetroServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-7-1-retro-server" />;
}
