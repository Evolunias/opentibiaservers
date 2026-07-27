import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-open-tibia-server-north-america');
}

export default function RetroOpenTibiaServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="retro-open-tibia-server-north-america" />;
}
