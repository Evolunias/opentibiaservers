import CustomTibiaoriginsDiscordKeywordPage, { generateMetadata } from './custom-tibiaorigins-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTibiaoriginsDiscordKeywordPage />;
}
