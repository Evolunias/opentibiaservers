import NtoStar13BaiakServerKeywordPage, { generateMetadata } from './nto-star-13-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStar13BaiakServerKeywordPage />;
}
