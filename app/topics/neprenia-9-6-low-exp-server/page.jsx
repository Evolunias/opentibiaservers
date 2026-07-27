import Neprenia96LowExpServerKeywordPage, { generateMetadata } from './neprenia-9-6-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Neprenia96LowExpServerKeywordPage />;
}
