import CustomTibiaretroOnlineKeywordPage, { generateMetadata } from './custom-tibiaretro-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTibiaretroOnlineKeywordPage />;
}
