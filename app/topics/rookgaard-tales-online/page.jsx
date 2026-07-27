import RookgaardTalesOnlineKeywordPage, { generateMetadata } from './rookgaard-tales-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RookgaardTalesOnlineKeywordPage />;
}
