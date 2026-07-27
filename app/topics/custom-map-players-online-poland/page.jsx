import CustomMapPlayersOnlinePolandKeywordPage, { generateMetadata } from './custom-map-players-online-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapPlayersOnlinePolandKeywordPage />;
}
