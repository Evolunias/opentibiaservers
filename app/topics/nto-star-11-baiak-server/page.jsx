import NtoStar11BaiakServerKeywordPage, { generateMetadata } from './nto-star-11-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStar11BaiakServerKeywordPage />;
}
