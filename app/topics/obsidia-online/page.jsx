import ObsidiaOnlineKeywordPage, { generateMetadata } from './obsidia-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ObsidiaOnlineKeywordPage />;
}
