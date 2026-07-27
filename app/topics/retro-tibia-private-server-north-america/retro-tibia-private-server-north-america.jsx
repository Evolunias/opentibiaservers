import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-tibia-private-server-north-america');
}

export default function RetroTibiaPrivateServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="retro-tibia-private-server-north-america" />;
}
