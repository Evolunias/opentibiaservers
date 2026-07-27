import BaiakNostaltherServerKeywordPage, { generateMetadata } from './baiak-nostalther-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakNostaltherServerKeywordPage />;
}
