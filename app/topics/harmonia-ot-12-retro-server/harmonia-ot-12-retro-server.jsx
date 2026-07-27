import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-12-retro-server');
}

export default function HarmoniaOt12RetroServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-12-retro-server" />;
}
