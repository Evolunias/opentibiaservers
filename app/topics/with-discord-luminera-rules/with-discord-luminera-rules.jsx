import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-luminera-rules');
}

export default function WithDiscordLumineraRulesKeywordPage() {
  return <StaticKeywordPage slug="with-discord-luminera-rules" />;
}
