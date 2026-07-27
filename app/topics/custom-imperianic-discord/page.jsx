import CustomImperianicDiscordKeywordPage, { generateMetadata } from './custom-imperianic-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomImperianicDiscordKeywordPage />;
}
