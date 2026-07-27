import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-open-tibia-server-canada');
}

export default function RetroOpenTibiaServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="retro-open-tibia-server-canada" />;
}
