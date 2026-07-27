import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-8-0-retro-server');
}

export default function HarmoniaOt80RetroServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-8-0-retro-server" />;
}
