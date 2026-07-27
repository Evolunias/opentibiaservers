import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-mist-of-death-discord');
}

export default function LowrateMistOfDeathDiscordKeywordPage() {
  return <StaticKeywordPage slug="lowrate-mist-of-death-discord" />;
}
