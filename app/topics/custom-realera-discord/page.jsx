import CustomRealeraDiscordKeywordPage, { generateMetadata } from './custom-realera-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomRealeraDiscordKeywordPage />;
}
