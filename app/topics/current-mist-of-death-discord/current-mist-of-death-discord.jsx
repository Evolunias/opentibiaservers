import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-mist-of-death-discord');
}

export default function CurrentMistOfDeathDiscordKeywordPage() {
  return <StaticKeywordPage slug="current-mist-of-death-discord" />;
}
