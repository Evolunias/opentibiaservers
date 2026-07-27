import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-mist-of-death-discord');
}

export default function CustomMistOfDeathDiscordKeywordPage() {
  return <StaticKeywordPage slug="custom-mist-of-death-discord" />;
}
