import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-madnessalive-server');
}

export default function RetroMadnessaliveServerKeywordPage() {
  return <StaticKeywordPage slug="retro-madnessalive-server" />;
}
