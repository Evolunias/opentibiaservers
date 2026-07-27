import CurrentRookgaardTalesOnlineKeywordPage, { generateMetadata } from './current-rookgaard-tales-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentRookgaardTalesOnlineKeywordPage />;
}
