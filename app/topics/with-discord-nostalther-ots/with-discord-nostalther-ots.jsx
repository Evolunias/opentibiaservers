import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-nostalther-ots');
}

export default function WithDiscordNostaltherOtsKeywordPage() {
  return <StaticKeywordPage slug="with-discord-nostalther-ots" />;
}
