import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-tibia-private-server-latin-america');
}

export default function RetroTibiaPrivateServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="retro-tibia-private-server-latin-america" />;
}
