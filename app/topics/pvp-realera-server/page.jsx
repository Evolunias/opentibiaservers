import PvpRealeraServerKeywordPage, { generateMetadata } from './pvp-realera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpRealeraServerKeywordPage />;
}
