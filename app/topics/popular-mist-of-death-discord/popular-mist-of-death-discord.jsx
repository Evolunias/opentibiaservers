import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-mist-of-death-discord');
}

export default function PopularMistOfDeathDiscordKeywordPage() {
  return <StaticKeywordPage slug="popular-mist-of-death-discord" />;
}
