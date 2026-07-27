import CustomAmeriaDiscordKeywordPage, { generateMetadata } from './custom-ameria-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomAmeriaDiscordKeywordPage />;
}
