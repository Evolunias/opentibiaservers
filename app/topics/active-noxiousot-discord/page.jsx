import ActiveNoxiousotDiscordKeywordPage, { generateMetadata } from './active-noxiousot-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveNoxiousotDiscordKeywordPage />;
}
