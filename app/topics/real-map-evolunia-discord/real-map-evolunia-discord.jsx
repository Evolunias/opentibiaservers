import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-evolunia-discord');
}

export default function RealMapEvoluniaDiscordKeywordPage() {
  return <StaticKeywordPage slug="real-map-evolunia-discord" />;
}
