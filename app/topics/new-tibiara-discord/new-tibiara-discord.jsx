import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibiara-discord');
}

export default function NewTibiaraDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-tibiara-discord" />;
}
