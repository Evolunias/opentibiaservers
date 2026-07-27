import Nilot15PvpServerKeywordPage, { generateMetadata } from './nilot-15-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Nilot15PvpServerKeywordPage />;
}
