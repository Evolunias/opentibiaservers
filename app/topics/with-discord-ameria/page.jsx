import WithDiscordAmeriaKeywordPage, { generateMetadata } from './with-discord-ameria';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordAmeriaKeywordPage />;
}
