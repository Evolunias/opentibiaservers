import NtoStar12BaiakServerKeywordPage, { generateMetadata } from './nto-star-12-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStar12BaiakServerKeywordPage />;
}
