import BaiakDiscordLatinAmericaKeywordPage, { generateMetadata } from './baiak-discord-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakDiscordLatinAmericaKeywordPage />;
}
