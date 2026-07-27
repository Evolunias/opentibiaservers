import LowExpPlayersOnlineSwedenKeywordPage, { generateMetadata } from './low-exp-players-online-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpPlayersOnlineSwedenKeywordPage />;
}
