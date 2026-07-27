import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-mist-of-death-discord');
}

export default function TopMistOfDeathDiscordKeywordPage() {
  return <StaticKeywordPage slug="top-mist-of-death-discord" />;
}
