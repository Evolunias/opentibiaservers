import LowrateNoxiousotDiscordKeywordPage, { generateMetadata } from './lowrate-noxiousot-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateNoxiousotDiscordKeywordPage />;
}
