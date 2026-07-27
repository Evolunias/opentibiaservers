import NewNoxiousotDiscordKeywordPage, { generateMetadata } from './new-noxiousot-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewNoxiousotDiscordKeywordPage />;
}
