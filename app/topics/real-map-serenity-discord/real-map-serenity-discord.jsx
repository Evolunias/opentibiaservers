import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-serenity-discord');
}

export default function RealMapSerenityDiscordKeywordPage() {
  return <StaticKeywordPage slug="real-map-serenity-discord" />;
}
