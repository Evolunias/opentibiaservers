import TopNtoStarServerKeywordPage, { generateMetadata } from './top-nto-star-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopNtoStarServerKeywordPage />;
}
