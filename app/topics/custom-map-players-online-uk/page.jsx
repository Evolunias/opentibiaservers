import CustomMapPlayersOnlineUkKeywordPage, { generateMetadata } from './custom-map-players-online-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapPlayersOnlineUkKeywordPage />;
}
