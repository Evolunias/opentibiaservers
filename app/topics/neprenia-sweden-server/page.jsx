import NepreniaSwedenServerKeywordPage, { generateMetadata } from './neprenia-sweden-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NepreniaSwedenServerKeywordPage />;
}
