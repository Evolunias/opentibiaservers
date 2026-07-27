import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-guilds');
}

export default function MistOfDeathGuildsKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-guilds" />;
}
