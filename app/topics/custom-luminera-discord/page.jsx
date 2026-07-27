import CustomLumineraDiscordKeywordPage, { generateMetadata } from './custom-luminera-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomLumineraDiscordKeywordPage />;
}
