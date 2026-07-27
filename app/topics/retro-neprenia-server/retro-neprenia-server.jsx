import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-neprenia-server');
}

export default function RetroNepreniaServerKeywordPage() {
  return <StaticKeywordPage slug="retro-neprenia-server" />;
}
