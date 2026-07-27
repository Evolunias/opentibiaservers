import CustomUnlineDiscordKeywordPage, { generateMetadata } from './custom-unline-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomUnlineDiscordKeywordPage />;
}
