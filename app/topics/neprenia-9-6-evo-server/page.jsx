import Neprenia96EvoServerKeywordPage, { generateMetadata } from './neprenia-9-6-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Neprenia96EvoServerKeywordPage />;
}
