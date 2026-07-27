import Neprenia11LowExpServerKeywordPage, { generateMetadata } from './neprenia-11-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Neprenia11LowExpServerKeywordPage />;
}
