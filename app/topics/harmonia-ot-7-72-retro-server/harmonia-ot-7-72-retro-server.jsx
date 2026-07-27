import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-7-72-retro-server');
}

export default function HarmoniaOt772RetroServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-7-72-retro-server" />;
}
