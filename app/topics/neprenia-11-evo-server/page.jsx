import Neprenia11EvoServerKeywordPage, { generateMetadata } from './neprenia-11-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Neprenia11EvoServerKeywordPage />;
}
