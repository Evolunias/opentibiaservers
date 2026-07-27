import Nilot13PvpServerKeywordPage, { generateMetadata } from './nilot-13-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Nilot13PvpServerKeywordPage />;
}
