import Neprenia11BaiakServerKeywordPage, { generateMetadata } from './neprenia-11-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Neprenia11BaiakServerKeywordPage />;
}
