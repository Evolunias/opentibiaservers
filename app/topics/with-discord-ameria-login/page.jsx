import WithDiscordAmeriaLoginKeywordPage, { generateMetadata } from './with-discord-ameria-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordAmeriaLoginKeywordPage />;
}
