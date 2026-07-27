import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-trashformers-rules');
}

export default function WithDiscordTrashformersRulesKeywordPage() {
  return <StaticKeywordPage slug="with-discord-trashformers-rules" />;
}
