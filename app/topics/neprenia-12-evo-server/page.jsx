import Neprenia12EvoServerKeywordPage, { generateMetadata } from './neprenia-12-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Neprenia12EvoServerKeywordPage />;
}
