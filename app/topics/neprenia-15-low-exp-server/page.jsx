import Neprenia15LowExpServerKeywordPage, { generateMetadata } from './neprenia-15-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Neprenia15LowExpServerKeywordPage />;
}
