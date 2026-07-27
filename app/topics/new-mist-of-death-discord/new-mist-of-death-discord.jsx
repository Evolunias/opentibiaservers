import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-mist-of-death-discord');
}

export default function NewMistOfDeathDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-mist-of-death-discord" />;
}
