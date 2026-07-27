import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-open-tibia-server-mexico');
}

export default function RetroOpenTibiaServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="retro-open-tibia-server-mexico" />;
}
