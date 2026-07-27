import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-noxiousot-server');
}

export default function RetroNoxiousotServerKeywordPage() {
  return <StaticKeywordPage slug="retro-noxiousot-server" />;
}
