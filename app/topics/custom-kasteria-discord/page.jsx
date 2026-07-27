import CustomKasteriaDiscordKeywordPage, { generateMetadata } from './custom-kasteria-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomKasteriaDiscordKeywordPage />;
}
