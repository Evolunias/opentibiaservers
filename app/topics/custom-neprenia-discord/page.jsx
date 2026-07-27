import CustomNepreniaDiscordKeywordPage, { generateMetadata } from './custom-neprenia-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomNepreniaDiscordKeywordPage />;
}
