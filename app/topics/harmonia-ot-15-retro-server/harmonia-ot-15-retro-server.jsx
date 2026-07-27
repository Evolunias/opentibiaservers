import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-15-retro-server');
}

export default function HarmoniaOt15RetroServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-15-retro-server" />;
}
