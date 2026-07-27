import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-mist-of-death-discord');
}

export default function FreshStartMistOfDeathDiscordKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-mist-of-death-discord" />;
}
