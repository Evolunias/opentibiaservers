import Nilot11BaiakServerKeywordPage, { generateMetadata } from './nilot-11-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Nilot11BaiakServerKeywordPage />;
}
