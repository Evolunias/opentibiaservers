import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-mist-of-death-discord');
}

export default function BestMistOfDeathDiscordKeywordPage() {
  return <StaticKeywordPage slug="best-mist-of-death-discord" />;
}
