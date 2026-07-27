import Nilot15BaiakServerKeywordPage, { generateMetadata } from './nilot-15-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Nilot15BaiakServerKeywordPage />;
}
