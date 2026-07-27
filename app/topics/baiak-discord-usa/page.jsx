import BaiakDiscordUsaKeywordPage, { generateMetadata } from './baiak-discord-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakDiscordUsaKeywordPage />;
}
