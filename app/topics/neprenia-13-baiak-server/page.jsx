import Neprenia13BaiakServerKeywordPage, { generateMetadata } from './neprenia-13-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Neprenia13BaiakServerKeywordPage />;
}
