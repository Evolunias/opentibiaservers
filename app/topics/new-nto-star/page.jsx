import NewNtoStarKeywordPage, { generateMetadata } from './new-nto-star';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewNtoStarKeywordPage />;
}
