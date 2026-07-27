import WithDiscordAmeriaClientKeywordPage, { generateMetadata } from './with-discord-ameria-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordAmeriaClientKeywordPage />;
}
