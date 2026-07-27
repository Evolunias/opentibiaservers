import Neprenia15EvoServerKeywordPage, { generateMetadata } from './neprenia-15-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Neprenia15EvoServerKeywordPage />;
}
