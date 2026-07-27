import NtoStar15BaiakServerKeywordPage, { generateMetadata } from './nto-star-15-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStar15BaiakServerKeywordPage />;
}
