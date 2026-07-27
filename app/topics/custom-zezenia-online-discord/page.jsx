import CustomZezeniaOnlineDiscordKeywordPage, { generateMetadata } from './custom-zezenia-online-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomZezeniaOnlineDiscordKeywordPage />;
}
