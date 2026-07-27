import CustomEternalOdysseyDiscordKeywordPage, { generateMetadata } from './custom-eternal-odyssey-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomEternalOdysseyDiscordKeywordPage />;
}
