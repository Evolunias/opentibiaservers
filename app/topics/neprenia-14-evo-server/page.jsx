import Neprenia14EvoServerKeywordPage, { generateMetadata } from './neprenia-14-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Neprenia14EvoServerKeywordPage />;
}
