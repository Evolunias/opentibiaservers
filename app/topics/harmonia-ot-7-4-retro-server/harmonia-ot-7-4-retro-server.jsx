import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-7-4-retro-server');
}

export default function HarmoniaOt74RetroServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-7-4-retro-server" />;
}
