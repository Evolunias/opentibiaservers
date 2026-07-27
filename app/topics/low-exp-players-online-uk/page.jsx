import LowExpPlayersOnlineUkKeywordPage, { generateMetadata } from './low-exp-players-online-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpPlayersOnlineUkKeywordPage />;
}
