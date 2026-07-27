import CustomClassicusDiscordKeywordPage, { generateMetadata } from './custom-classicus-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomClassicusDiscordKeywordPage />;
}
