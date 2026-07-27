import NtoStar14BaiakServerKeywordPage, { generateMetadata } from './nto-star-14-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStar14BaiakServerKeywordPage />;
}
