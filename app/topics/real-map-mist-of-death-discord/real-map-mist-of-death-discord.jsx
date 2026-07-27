import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-mist-of-death-discord');
}

export default function RealMapMistOfDeathDiscordKeywordPage() {
  return <StaticKeywordPage slug="real-map-mist-of-death-discord" />;
}
