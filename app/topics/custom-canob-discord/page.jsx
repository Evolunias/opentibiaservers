import CustomCanobDiscordKeywordPage, { generateMetadata } from './custom-canob-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomCanobDiscordKeywordPage />;
}
