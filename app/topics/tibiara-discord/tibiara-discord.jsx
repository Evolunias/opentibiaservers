import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-discord');
}

export default function TibiaraDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibiara-discord" />;
}
