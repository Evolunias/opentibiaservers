import Nilot12PvpServerKeywordPage, { generateMetadata } from './nilot-12-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Nilot12PvpServerKeywordPage />;
}
