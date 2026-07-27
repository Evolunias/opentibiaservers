import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-medivia-server');
}

export default function RetroMediviaServerKeywordPage() {
  return <StaticKeywordPage slug="retro-medivia-server" />;
}
