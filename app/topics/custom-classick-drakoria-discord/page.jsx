import CustomClassickDrakoriaDiscordKeywordPage, { generateMetadata } from './custom-classick-drakoria-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomClassickDrakoriaDiscordKeywordPage />;
}
