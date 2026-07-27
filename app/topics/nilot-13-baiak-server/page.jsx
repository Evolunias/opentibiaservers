import Nilot13BaiakServerKeywordPage, { generateMetadata } from './nilot-13-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Nilot13BaiakServerKeywordPage />;
}
