import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-saintsot-rules');
}

export default function WithDiscordSaintsotRulesKeywordPage() {
  return <StaticKeywordPage slug="with-discord-saintsot-rules" />;
}
