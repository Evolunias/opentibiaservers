import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-10-0-retro-server');
}

export default function HarmoniaOt100RetroServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-10-0-retro-server" />;
}
