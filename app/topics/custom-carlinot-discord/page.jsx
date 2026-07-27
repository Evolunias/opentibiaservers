import CustomCarlinotDiscordKeywordPage, { generateMetadata } from './custom-carlinot-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomCarlinotDiscordKeywordPage />;
}
