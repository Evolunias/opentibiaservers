import Thornia15BaiakServerKeywordPage, { generateMetadata } from './thornia-15-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia15BaiakServerKeywordPage />;
}
