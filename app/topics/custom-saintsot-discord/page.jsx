import CustomSaintsotDiscordKeywordPage, { generateMetadata } from './custom-saintsot-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomSaintsotDiscordKeywordPage />;
}
