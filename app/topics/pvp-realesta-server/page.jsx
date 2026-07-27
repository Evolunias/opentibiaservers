import PvpRealestaServerKeywordPage, { generateMetadata } from './pvp-realesta-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpRealestaServerKeywordPage />;
}
