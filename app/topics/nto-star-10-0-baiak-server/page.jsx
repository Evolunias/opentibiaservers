import NtoStar100BaiakServerKeywordPage, { generateMetadata } from './nto-star-10-0-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStar100BaiakServerKeywordPage />;
}
