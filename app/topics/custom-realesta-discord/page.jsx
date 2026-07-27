import CustomRealestaDiscordKeywordPage, { generateMetadata } from './custom-realesta-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomRealestaDiscordKeywordPage />;
}
