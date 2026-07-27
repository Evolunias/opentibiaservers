import Neprenia13LowExpServerKeywordPage, { generateMetadata } from './neprenia-13-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Neprenia13LowExpServerKeywordPage />;
}
