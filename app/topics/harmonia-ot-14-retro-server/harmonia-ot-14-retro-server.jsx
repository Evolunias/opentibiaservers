import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-14-retro-server');
}

export default function HarmoniaOt14RetroServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-14-retro-server" />;
}
