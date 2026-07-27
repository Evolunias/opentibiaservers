import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-midhem-rules');
}

export default function WithDiscordMidhemRulesKeywordPage() {
  return <StaticKeywordPage slug="with-discord-midhem-rules" />;
}
