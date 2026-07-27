import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-harmonia-ot-server');
}

export default function RetroHarmoniaOtServerKeywordPage() {
  return <StaticKeywordPage slug="retro-harmonia-ot-server" />;
}
