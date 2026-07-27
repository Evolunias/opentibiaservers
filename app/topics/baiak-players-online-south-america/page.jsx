import BaiakPlayersOnlineSouthAmericaKeywordPage, { generateMetadata } from './baiak-players-online-south-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakPlayersOnlineSouthAmericaKeywordPage />;
}
