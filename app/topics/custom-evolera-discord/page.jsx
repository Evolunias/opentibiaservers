import CustomEvoleraDiscordKeywordPage, { generateMetadata } from './custom-evolera-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomEvoleraDiscordKeywordPage />;
}
