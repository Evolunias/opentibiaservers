import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-eldera-rules');
}

export default function WithDiscordElderaRulesKeywordPage() {
  return <StaticKeywordPage slug="with-discord-eldera-rules" />;
}
