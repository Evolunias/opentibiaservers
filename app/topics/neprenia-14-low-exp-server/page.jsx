import Neprenia14LowExpServerKeywordPage, { generateMetadata } from './neprenia-14-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Neprenia14LowExpServerKeywordPage />;
}
