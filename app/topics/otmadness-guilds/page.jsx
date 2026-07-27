import OtmadnessGuildsKeywordPage, { generateMetadata } from './otmadness-guilds';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtmadnessGuildsKeywordPage />;
}
