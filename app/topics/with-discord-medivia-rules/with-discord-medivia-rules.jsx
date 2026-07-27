import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-medivia-rules');
}

export default function WithDiscordMediviaRulesKeywordPage() {
  return <StaticKeywordPage slug="with-discord-medivia-rules" />;
}
