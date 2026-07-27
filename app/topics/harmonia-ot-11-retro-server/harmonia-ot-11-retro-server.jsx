import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-11-retro-server');
}

export default function HarmoniaOt11RetroServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-11-retro-server" />;
}
