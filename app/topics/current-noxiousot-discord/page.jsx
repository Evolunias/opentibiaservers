import CurrentNoxiousotDiscordKeywordPage, { generateMetadata } from './current-noxiousot-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentNoxiousotDiscordKeywordPage />;
}
