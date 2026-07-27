import NtoStar84BaiakServerKeywordPage, { generateMetadata } from './nto-star-8-4-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStar84BaiakServerKeywordPage />;
}
