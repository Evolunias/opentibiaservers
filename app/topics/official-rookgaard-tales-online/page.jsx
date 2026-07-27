import OfficialRookgaardTalesOnlineKeywordPage, { generateMetadata } from './official-rookgaard-tales-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialRookgaardTalesOnlineKeywordPage />;
}
