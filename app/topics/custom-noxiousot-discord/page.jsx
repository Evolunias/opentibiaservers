import CustomNoxiousotDiscordKeywordPage, { generateMetadata } from './custom-noxiousot-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomNoxiousotDiscordKeywordPage />;
}
