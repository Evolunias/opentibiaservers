import CustomCyntaraDiscordKeywordPage, { generateMetadata } from './custom-cyntara-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomCyntaraDiscordKeywordPage />;
}
