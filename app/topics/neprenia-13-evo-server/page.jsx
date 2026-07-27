import Neprenia13EvoServerKeywordPage, { generateMetadata } from './neprenia-13-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Neprenia13EvoServerKeywordPage />;
}
