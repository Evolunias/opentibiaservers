import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-oxygenot-discord');
}

export default function NewOxygenotDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-oxygenot-discord" />;
}
