import NewNtoStarServerKeywordPage, { generateMetadata } from './new-nto-star-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewNtoStarServerKeywordPage />;
}
