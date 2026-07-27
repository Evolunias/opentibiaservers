import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-discord');
}

export default function MistOfDeathDiscordKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-discord" />;
}
