import CustomMediviaDiscordKeywordPage, { generateMetadata } from './custom-medivia-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMediviaDiscordKeywordPage />;
}
