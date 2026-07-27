import Nilot11PvpServerKeywordPage, { generateMetadata } from './nilot-11-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Nilot11PvpServerKeywordPage />;
}
