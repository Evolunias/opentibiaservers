import EternalOdysseyOnlineKeywordPage, { generateMetadata } from './eternal-odyssey-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EternalOdysseyOnlineKeywordPage />;
}
