import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-open-tibia-server-france');
}

export default function RetroOpenTibiaServerFranceKeywordPage() {
  return <StaticKeywordPage slug="retro-open-tibia-server-france" />;
}
