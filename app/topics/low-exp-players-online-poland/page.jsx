import LowExpPlayersOnlinePolandKeywordPage, { generateMetadata } from './low-exp-players-online-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpPlayersOnlinePolandKeywordPage />;
}
