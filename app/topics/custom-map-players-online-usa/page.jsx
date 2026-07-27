import CustomMapPlayersOnlineUsaKeywordPage, { generateMetadata } from './custom-map-players-online-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapPlayersOnlineUsaKeywordPage />;
}
