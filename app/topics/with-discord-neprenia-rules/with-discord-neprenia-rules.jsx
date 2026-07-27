import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-neprenia-rules');
}

export default function WithDiscordNepreniaRulesKeywordPage() {
  return <StaticKeywordPage slug="with-discord-neprenia-rules" />;
}
