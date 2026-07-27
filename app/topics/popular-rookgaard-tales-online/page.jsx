import PopularRookgaardTalesOnlineKeywordPage, { generateMetadata } from './popular-rookgaard-tales-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularRookgaardTalesOnlineKeywordPage />;
}
