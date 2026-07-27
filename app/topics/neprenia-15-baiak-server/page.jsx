import Neprenia15BaiakServerKeywordPage, { generateMetadata } from './neprenia-15-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Neprenia15BaiakServerKeywordPage />;
}
