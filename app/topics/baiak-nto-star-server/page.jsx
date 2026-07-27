import BaiakNtoStarServerKeywordPage, { generateMetadata } from './baiak-nto-star-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakNtoStarServerKeywordPage />;
}
