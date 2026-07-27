import Neprenia12LowExpServerKeywordPage, { generateMetadata } from './neprenia-12-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Neprenia12LowExpServerKeywordPage />;
}
