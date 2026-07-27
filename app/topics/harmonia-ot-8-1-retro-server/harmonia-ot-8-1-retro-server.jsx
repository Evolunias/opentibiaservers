import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-8-1-retro-server');
}

export default function HarmoniaOt81RetroServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-8-1-retro-server" />;
}
