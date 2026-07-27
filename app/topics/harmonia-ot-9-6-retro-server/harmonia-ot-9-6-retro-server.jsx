import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-9-6-retro-server');
}

export default function HarmoniaOt96RetroServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-9-6-retro-server" />;
}
