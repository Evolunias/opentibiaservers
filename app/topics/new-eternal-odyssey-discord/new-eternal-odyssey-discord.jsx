import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-eternal-odyssey-discord');
}

export default function NewEternalOdysseyDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-eternal-odyssey-discord" />;
}
