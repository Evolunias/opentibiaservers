import Neprenia14BaiakServerKeywordPage, { generateMetadata } from './neprenia-14-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Neprenia14BaiakServerKeywordPage />;
}
