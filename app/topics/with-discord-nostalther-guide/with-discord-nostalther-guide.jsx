import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-nostalther-guide');
}

export default function WithDiscordNostaltherGuideKeywordPage() {
  return <StaticKeywordPage slug="with-discord-nostalther-guide" />;
}
