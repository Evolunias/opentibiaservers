import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-open-tibia-server-europe');
}

export default function RetroOpenTibiaServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="retro-open-tibia-server-europe" />;
}
