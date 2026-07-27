import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-archlight-rules');
}

export default function WithDiscordArchlightRulesKeywordPage() {
  return <StaticKeywordPage slug="with-discord-archlight-rules" />;
}
