import CustomLumineraOnlineKeywordPage, { generateMetadata } from './custom-luminera-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomLumineraOnlineKeywordPage />;
}
