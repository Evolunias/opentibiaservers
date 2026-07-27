import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-open-tibia-server-uk');
}

export default function RetroOpenTibiaServerUkKeywordPage() {
  return <StaticKeywordPage slug="retro-open-tibia-server-uk" />;
}
