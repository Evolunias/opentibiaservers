import Neprenia12BaiakServerKeywordPage, { generateMetadata } from './neprenia-12-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Neprenia12BaiakServerKeywordPage />;
}
