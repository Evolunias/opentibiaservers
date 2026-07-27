import WithDiscordTrashformersRulesKeywordPage, { generateMetadata } from './with-discord-trashformers-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordTrashformersRulesKeywordPage />;
}
