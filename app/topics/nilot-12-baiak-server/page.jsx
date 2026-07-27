import Nilot12BaiakServerKeywordPage, { generateMetadata } from './nilot-12-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Nilot12BaiakServerKeywordPage />;
}
