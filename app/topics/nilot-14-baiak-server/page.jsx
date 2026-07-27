import Nilot14BaiakServerKeywordPage, { generateMetadata } from './nilot-14-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Nilot14BaiakServerKeywordPage />;
}
